<template>
    <div class="btn">
        {{title}}
    </div>
</template>

<script>
  export default {
    name: "Button",
    props: ['title', ],
  }
</script>

<style scoped>
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
        background-color: rgba(178, 34, 34, .2);
    }
    .btn::selection {
        background: transparent;
    }
</style>
