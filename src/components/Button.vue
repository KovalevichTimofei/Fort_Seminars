<template>
    <div class="btn" @click="submit">
        {{title}}
    </div>
</template>

<script>
  export default {
    name: "Button",
    props: ['title', ],
    methods:{
      submit(){
       this.$emit('submit');
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
    .btn {
        border: .1rem solid;
        border-radius: .8rem;
        background-color: initial;
        padding: .2rem 1.5rem;
        line-height: 1rem;
        text-transform: uppercase;
        display: inline-block;
        transition: background-color 300ms;
    }
    .btn:hover {
        cursor: pointer;
        background-color: rgba(203, 140, 29, .2);
    }
    .btn::selection {
        background: transparent;
    }
</style>
