<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: 'app',
    }
</script>

<style>
  @font-face {
    font-family: GothamProNarrow;
    src: url(fonts/GothamProNarrow.ttf);
  }
  html{
      scroll-behavior:smooth
  }
  body {
    margin: 0;
    font-family: GothamProNarrow;
    text-transform: uppercase;
  }
</style>
