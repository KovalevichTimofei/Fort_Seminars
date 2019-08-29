<template>
  <div class="main-part">
    <div class="main-container">
      <div class="top-menu">
        <div class="main-logo">Церковь Фортечная</div>
        <div class="top-menu-tabs">
          <div><a href="#schedule">Расписание</a></div>
          <div><a href="#details">Детали</a></div>
          <div><a href="#invite">Приглашение</a></div>
          <div><a href="#signup">Регистрация</a></div>
          <div><a href="#contacts">Контакты</a></div>
        </div>
        <i class="fa fa-bars burger" aria-hidden="true"></i>
      </div>
      <div class="main-info">
        <div>
          <div class="">Семинар</div>
          <div class="seminar-title">"Душепопечение, как это работает"</div>
          <div class="date">17.09.2019</div>
        </div>
        <btn class="signup" title="Регистрация"></btn>
        <img src="../assets/church_logo.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import btn from './Button';
  import 'font-awesome/css/font-awesome.min.css';

  export default {
    name: 'MainPart',
    props: {
      msg: String
    },
    components: {
      btn
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  .main-part {
    width: 80%;
    min-height: 100%;
    padding: 5% 10% 10%;
    background-color: #3E1229;
    position: relative;

      @media(max-width: 1250px) {
          padding: 5% 6% 10%;
          width: 88%;
      }
      @media(max-width: 1000px) {
          padding: 5% 5% 10%;
          width: 90%;
      }
  }
  .top-menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  .main-logo {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: firebrick;
  }
  .top-menu-tabs {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;

    @media(max-width: 1000px) {
      display: none;
    }

    div > a {
      color: white;
      text-decoration: none;
    }

    div:hover {
      text-decoration: underline;
    }
  }
  .burger {
    color: white;

    @media(min-width: 1001px) {
      display: none;
    }
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

    div > div, .signup {
      position: relative;
      z-index: 1;
      font-size: 30px;
      padding: 20px;
      color: white;
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
