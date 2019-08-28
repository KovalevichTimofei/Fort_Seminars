import { storiesOf, addDecorator  } from '@storybook/vue';
import MyButton from '../../src/components/Button.vue';
import InputTextField from '../../src/components/InputTextField.vue';
import './styles.css';

addDecorator(() => ({
  template: `<div class="body"><story /></div>`,
}));

storiesOf('Button', module)
  .add('default', () => ({
    components: { MyButton },
    template: '<my-button title="Регистрация">rounded</my-button>'
  }));

storiesOf('TextFields', module)
  .add('input', () => ({
    components: { InputTextField },
    template: '<input-text-field label="Подпись текстового поля"/>'
  }));
