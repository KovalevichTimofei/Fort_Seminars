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
                    v-bind:value="name"
            ></InputTextField>
            <Button class="signup" title="Зарегистрироваться"></Button>
        </div>
    </div>
</template>

<script>
    import InputTextField from "@/components/InputTextField";
    import Button from "@/components/Button";
    import SectionTitle from "@/components/SectionTitle";

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
            color: firebrick;
            margin: 12px 0;
        }
    }
</style>
