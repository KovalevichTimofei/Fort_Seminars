<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="main-container">
      <div class="top-menu">
        <div class="top-menu-logo">Церковь Фортечная</div>
        <div class="top-menu-tabs"></div>
      </div>
      <div class="main-info">
        <span class="">Семинар</span>
        <span class="seminar-title">Название</span>
        <span class="date">Дата</span>
        <div class="register-btn">Регистрация</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
