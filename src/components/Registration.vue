<template>
    <div class="signup-part" id="signup">
        <div class="title">Регистрация</div>
        <div class="title title-shadow">Регистрация</div>
        <div class="form">
            <InputTextField
                    v-model="name"
                    label="Имя"
                    v-bind:value="name"
            ></InputTextField>
            <InputTextField
                    v-model="surname"
                    label="Фамилия"
                    v-bind:value="name"
            ></InputTextField>
            <Button class="signup" title="Зарегистрироваться"></Button>
        </div>
    </div>
</template>

<script>
    import InputTextField from "@/components/InputTextField";
    import Button from "@/components/Button";

  export default {
    name: "Registration",
    components: {
      InputTextField,
      Button,
    },
    data: function () {
      return {
        name: '',
        surname: '',
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
    .signup-part {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin: 50px;
            color: #3E1229;
            font-size: 30px;
        }
        .title-shadow {
            font-size: 8rem;
            line-height: 8rem;
            margin: 0;
            opacity: .1;
            position: absolute;
            z-index: 0;

        }
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .signup {
            font-size: 20px;
            padding: 20px;
            color: firebrick;
            margin: 12px 0;
        }
    }
</style>
