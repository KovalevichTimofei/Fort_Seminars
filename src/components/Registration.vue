<template>
    <div class="signup-part" id="signup">
        <SectionTitle title="Регистрация" classname="dark" class="title"/>
        <div class="form">
            <InputTextField
                    v-model="name"
                    label="Имя"
                    v-bind:value="name"
            ></InputTextField>
            <InputTextField
                    v-model="surname"
                    label="Фамилия"
                    v-bind:value="surname"
            ></InputTextField>
            <InputTextField
                    v-model="email"
                    label="Электронная почта"
                    v-bind:value="email"
            ></InputTextField>
            <Button
               @submit="handleRegister"
               class="signup"
               title="Зарегистрироваться"
            >
            </Button>
        </div>
        <modal
                name="type-all-message"
                :adaptive="true"
                width="50%" height="30%">
            <div class="modal">
                Заполните все поля!
            </div>
        </modal>
        <modal
           name="success-message"
           :adaptive="true"
           width="50%" height="30%">
            <div class="modal">
                Регистрация прошла успешно. Ждём вас на семинаре!
            </div>
        </modal>
        <modal
            name="email-exists-message"
            :adaptive="true"
            width="50%" height="30%">
            <div class="modal">
                Человек с таким email уже зарегистрирован.
                Введите другой адрес.
            </div>
        </modal>
    </div>
</template>

<script>
    import InputTextField from "@/components/InputTextField";
    import Button from "@/components/Button";
    import SectionTitle from "@/components/SectionTitle";

    import { mapState, mapActions } from 'vuex';

      export default {
        name: "Registration",
        components: {
          InputTextField,
          Button,
          SectionTitle,
        },
        data: function () {
          return {
            name: '',
            surname: '',
            email: '',
          }
        },
        methods: {
          handleRegister() {
            if(this.name === '' || this.email === '' || this.surname === '') {
              this.$modal.show('type-all-message');
              return;
            }
            this.registerUser({
              name: this.name,
              surname: this.surname,
              email: this.email,
              seminar: this.seminar,
            }).then((data) => {
              if(data.result === 'success')
                this.$modal.show('success-message');
              else if(data.result === 'email exists')
                this.$modal.show('email-exists-message');
            });
          },
          ...mapActions('users', [
            'registerUser',
          ]),
        },
        computed: {
          ...mapState({
            loading: state => state.users.loading,
            success: state => state.users.success,
            seminar: state => state.seminars.seminar,
          })
        },
      }
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../assets/theme.scss";

    .signup-part {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin-bottom: 70px;

            @media(max-width: 720px) {
                margin-bottom: 30px;
            }
        }

        .modal {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 80%;
            height: 60%;
            text-transform: none;
            font-size: 20px;
            color: $letters-color;
            padding: 10%;
        }

        @media(max-width: 720px) {
            margin: 20px 0 40px 0;
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .signup {
            font-size: 20px;
            padding: 20px;
            color: $letters-color;
            margin: 12px 0;
        }
    }
</style>
