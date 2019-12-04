<template>
  <div class="main-part">
    <div class="main-container">
      <div class="top-menu">
        <div class="main-logo">Церковь Фортечная</div>
        <input id="burger" type="checkbox">
        <label for="burger">
          <i class="fa fa-bars burger" aria-hidden="true"></i>
        </label>
        <label class="fon-label" for="burger">
          <div class="fon"></div>
        </label>
        <div class="top-menu-tabs">
          <div><a href="#schedule">Расписание</a></div>
          <div><a href="#details">Детали</a></div>
          <div v-if="seminar.invite_link"><a href="#invite">Приглашение</a></div>
          <div><a href="#signup">Регистрация</a></div>
          <div><a href="#place">Место</a></div>
          <div><a href="#contacts">Контакты</a></div>
        </div>
      </div>
      <div class="main-info">
        <div>
          <div class="">Семинар</div>
          <div class="seminar-title">"{{seminar.title}}"</div>
          <div class="date">{{seminar.period}}</div>
        </div>
        <Button
            class="signup"
            title="Регистрация"
            anchor="#signup"
            dark="true"
        >
        </Button>
        <img src="../../assets/church_logo.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../Button';

export default {
  name: 'MainPart',
  props: {
    msg: String,
  },
  components: {
    Button,
  },
  computed: mapState('seminars', ['seminar']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/theme";

  .main-part {
    width: 80%;
    min-height: 100%;
    padding: 5% 10% 10%;
    background-color: $dark-main-color;
    position: relative;

      @media(max-width: 1250px) {
          padding: 5% 6% 10%;
          width: 88%;
      }
      @media(max-width: 1085px) {
          padding: 5% 5% 10%;
          width: 90%;
      }
  }
  .top-menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 50px;

    @media(max-width: 1085px) {
      display: -webkit-box;
    }
  }
  .main-logo {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: $letters-color;

    @media(max-width: 500px) {
      font-size: 25px;
    }
  }
  #burger {
    display: none;
  }
  .top-menu-tabs {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;

    div > a {
      color: $dark-letters-color;
      text-decoration: none;
    }

    div:hover {
      text-decoration: underline;
    }
  }
  .burger {
    color: $dark-letters-color;

    @media(min-width: 1086px) {
      display: none;
    }
  }
  .top-menu-tabs {
      transition: 400ms;
  }
  @media(max-width: 1085px) {
      #burger:not(:checked) ~ .top-menu-tabs {
          position: fixed;
          top: -100px;
          right: 0;
      }
  }
  #burger:checked ~ .top-menu-tabs {
    background-color: $dark-main-color;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    z-index: 5;
    padding: 0;

      div {
          padding: 20px;
      }
      a {
          color: $dark-letters-color;
      }
  }
  .fon {
      transition: 400ms;
  }
  #burger:checked ~ label > .fon {
    background-color: black;
    opacity: .5;
    z-index: 4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #burger:not(:checked) ~ label > .fon {
    opacity: 0;
  }
  .main-info {
    position: relative;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 894px) {
      min-height: 600px;
    }
    @media(max-width: 750px) {
      min-height: 500px;
    }
    @media(max-width: 650px) {
      min-height: 450px;
    }
    @media(max-width: 550px) {
      min-height: 400px;
    }
    @media(max-width: 450px) {
      min-height: 350px;
    }

    .seminar-title {
      color: $letters-color;
    }

    div > div, .signup {
      position: relative;
      z-index: 1;
      font-size: 30px;
      padding: 20px;
      color: $dark-letters-color;
      margin-left: 30px;
    }

    div > div {
      text-align: center;
    }

    .signup {
      justify-self: self-end;

      @media(max-width: 650px) {
        font-size: 20px;
      }
    }

    img {
      opacity: .3;
      position: absolute;
      top: 0;

      @media(max-width: 894px) {
        width: 100%;
      }
    }
    .img::selection {
      background: transparent;
    }
  }
</style>
