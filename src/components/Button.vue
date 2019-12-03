<template>
    <div class="btn" @click="submit">
        <a v-if="anchor" v-bind:href="anchor">
            {{title}}
        </a>
        <span v-else>{{title}}</span>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    anchor: String,
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../assets/theme.scss";

    .btn {
        border: .1rem solid;
        border-radius: .8rem;
        background-color: initial;
        padding: .2rem 1.5rem;
        line-height: 1rem;
        text-transform: uppercase;
        display: inline-block;
        transition: background-color 300ms;

        a {
            text-decoration: none;
            color: $dark-letters-color;
        }
    }
    .btn:hover {
        cursor: pointer;
        background-color: $button-hovered-color;
    }
    .btn::selection {
        background: transparent;
    }
</style>
