<template>
    <div>
        <div
            :key="validationType"
            v-for="validationType in obtainedValidationsTypes"
            class="error"
        >
            <template v-if="validationInfoObject.$error && !validationInfoObject[validationType]">
                {{validationsMapping[validationType]}}
            </template>
        </div>
    </div>
</template>

<script>
import validationsMapping from '../constants/validationMapping';

export default {
  name: 'ValidationMessages',
  props: {
    validationInfoObject: Object,
  },
  computed: {
    obtainedValidationsTypes() {
      return Object.keys(this.validationInfoObject.$params);
    },
  },
  beforeCreate() {
    this.validationsMapping = validationsMapping;
  },
};
</script>

<style scoped>
    .error {
        font-size: 0.85rem;
        color: #f57f6c;
        text-transform: none;
        align-self: flex-start;
        margin: 4px 0 0 24px;
    }
</style>
