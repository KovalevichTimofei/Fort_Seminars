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
            this.$store.dispatch('users/registerUser', {
              name: this.name,
              surname: this.surname,
              email: this.email,
              seminar: this.seminar,
            });
          },
          ...mapActions('users', ['registerUser']),
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
