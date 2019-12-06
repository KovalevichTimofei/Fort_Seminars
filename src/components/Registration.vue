<template>
    <div class="signup-part" id="signup">
        <SectionTitle title="Регистрация" classname="dark" class="title" />
        <div class="form">
            <InputTextField
                v-model="name"
                label="Имя"
                v-bind:value="name"
            />
            <InputTextField
                v-model="surname"
                label="Фамилия"
                v-bind:value="surname"
            />
            <InputTextField
                v-model="email"
                label="Электронная почта"
                v-bind:value="email"
            />
            <div
                v-show="!$v.email.email"
                class="error"
            >
                В этом поле должен быть корректный адрес!
            </div>
            <Button
               @submit="handleRegister"
               class="signup"
               title="Зарегистрироваться"
               :disabled="$v.$invalid"
            />
        </div>
        <modal
            :name="modalName"
            :adaptive="true"
            width="50%" height="30%">
            <div class="modal">
                {{message}}
            </div>
        </modal>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import InputTextField from '@/components/InputTextField';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'Registration',
  components: {
    InputTextField,
    Button,
    SectionTitle,
  },
  validations: {
    name: {
      required,
    },
    surname: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      modalName: '',
      message: '',
    };
  },
  methods: {
    handleRegister() {
      const {
        name, email: userEmail, surname, seminar,
      } = this;

      if (this.$v.$invalid) {
        return;
      }

      this.registerUser({
        name,
        surname,
        email: userEmail,
        seminar,
      }).then((data) => {
        if (data.result === 'success') {
          this.showModal(
            'success-message',
            'Регистрация прошла успешно. Ждём вас на семинаре!',
          );
        } else if (data.message === 'email exists') {
          this.showModal(
            'email-exists-message',
            'Человек с таким email уже зарегистрирован! Введите другой адрес.',
          );
        } else {
          this.showModal(
            'unexpected-error',
            'Неизвестная ошибка!',
          );
        }
      });
    },
    showModal(name, message) {
      this.modalName = name;
      this.message = message;

      this.$nextTick()
        .then(() => {
          this.$modal.show(name);
        });
    },
    ...mapActions('users', [
      'registerUser',
    ]),
  },
  computed: {
    ...mapState({
      loading: (state) => state.users.loading,
      success: (state) => state.users.success,
      seminar: (state) => state.seminars.seminar,
    }),
  },
};
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
    .error {
        font-size: 0.85rem;
        color: #f57f6c;
        text-transform: none;
        align-self: flex-start;
        margin: 4px 0 0 24px;
    }
</style>
