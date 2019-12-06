<template>
    <div :v-for="validation in Object.keys(validations)">
        {{validationsMapping[validation].ru}}
    </div>
</template>

<script>
import validationsMapping from '../assets/validationMapping';

export default {
  name: 'ValidationMessages',
  props: {
    validations: Object,
  },
};
</script>

<style scoped>

</style>
