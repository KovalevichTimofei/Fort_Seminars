<template>
    <div class="title-container">
        <div class="title" v-bind:class="`${classname}-title`">{{title}}</div>
        <div class="title-shadow" v-bind:class="`${classname}-subtitle`">{{title}}</div>
    </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    classname: String,
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../assets/theme.scss";

    .title-container {
        position: relative;
        text-align: center;
        margin: 2rem 0;
    }
    .title {
        font-size: 30px;
        position: relative;
        z-index: 1;

        @media(max-width: 950px) {
            font-size: 25px;
        }
        @media(max-width: 500px) {
            font-size: 20px;
        }
    }
    .title-shadow {
        font-size: 8rem;
        line-height: 8rem;
        opacity: .1;
        position: absolute;
        z-index: 0;
        color: $letters-color;
        top: 1rem;
        left: 50%;
        transform: translate(-50%, -50%);

        @media(max-width: 950px) {
            top: 0.75rem;
            font-size: 6rem;
            line-height: 6rem;
        }
        @media(max-width: 720px) {
            font-size: 4rem;
            line-height: 4rem;
        }
        @media(max-width: 500px) {
            font-size: 3rem;
            line-height: 3rem;
        }
    }
    .dark-title, .dark-subtitle {
        color: $dark-letters-color;
    }
    .light-title {
        color: $letters-color;
    }
    .light-subtitle {
        color: $dark-letters-color;
    }

</style>
