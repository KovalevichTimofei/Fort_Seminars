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

    div > a {
      color: white;
      text-decoration: none;
    }

    div:hover {
      text-decoration: underline;
    }
  }

  .main-info {
    position: relative;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    }

    img {
      opacity: .3;
      position: absolute;
      top: 0;
    }
    .img::selection {
      background: transparent;
    }
  }
</style>
