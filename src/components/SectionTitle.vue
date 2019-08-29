<template>
    <div class="title-container">
        <div class="title" v-bind:class="`${classname}-title`">{{title}}</div>
        <div class="title-shadow" v-bind:class="`${classname}-subtitle`">{{title}}</div>
    </div>
</template>

<script>
  export default {
    name: "SectionTitle",
    props: ['title', 'classname'],
  }
</script>

<style scoped>
    .title-container {
        position: relative;
        text-align: center;
        margin: 2rem 0;
    }
    .title {
        font-size: 30px;
        position: relative;
        z-index: 1;
    }
    .title-shadow {
        font-size: 8rem;
        line-height: 8rem;
        opacity: .1;
        position: absolute;
        z-index: 0;
        color: white;
        top: 1rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .dark-title, .dark-subtitle {
        color: #3E1229;
    }
    .light-title {
        color: firebrick;
    }
    .light-subtitle {
        color: white;
    }

</style>
