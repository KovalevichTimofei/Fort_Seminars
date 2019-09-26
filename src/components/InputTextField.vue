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
    name: "InputTextField",
    props: ['label', 'value'],
  }
</script>

<style lang="scss" type="text/scss" scoped>
    input {
        margin: 12px 0 0 12px;
        border: solid #CB8C1D 2px;
        border-radius: 10px;
        min-width: 400px;
        height: 50px;
        padding: 5px 10px;
        color: #CB8C1D;//firebrick;
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
        color: #CB8C1D;//firebrick;
        font: 16px GothamProNarrow;
    }
    ::-moz-placeholder {
        color: #CB8C1D;//firebrick;
    }
    :-moz-placeholder {
        color: #CB8C1D;//firebrick;
    }
    :-ms-input-placeholder {
        color: #CB8C1D;//firebrick;
    }
</style>
