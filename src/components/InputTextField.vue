<template>
    <div>
        <input
                type="text"
                :value="value"
                :placeholder="label"
                @input="handleInput"
        >
        <ValidationMessages :validationInfoObject="validations"/>
    </div>
</template>

<script>
import ValidationMessages from '@/components/ValidationMessages';

export default {
  name: 'InputTextField',
  components: {
    ValidationMessages,
  },
  props: {
    label: String,
    value: String,
    validations: Object,
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
      this.validations.$touch();
    },
  },
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
