<template>
    <input
            type="text"
            v-bind:value="value"
            v-bind:placeholder="label"
            v-on:input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
  name: 'InputTextField',
  props: ['label', 'value'],
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../assets/theme.scss";

    input {
        margin: 12px 0 0 12px;
        border: solid $letters-color 2px;
        border-radius: 10px;
        min-width: 400px;
        height: 50px;
        padding: 5px 10px;
        color: $letters-color;
        font: 16px GothamProNarrow;

        @media(max-width: 500px) {
            min-width: 300px;
        }
    }
    input:focus {
         outline: 0;
         border-width: 4px;
         margin: 10px 0 0 10px;
     }
    ::-webkit-input-placeholder {
        color: $letters-color;
        font: 16px GothamProNarrow;
    }
    ::-moz-placeholder {
        color: $letters-color;
    }
    :-moz-placeholder {
        color: $letters-color;
    }
    :-ms-input-placeholder {
        color: $letters-color;
    }
</style>
