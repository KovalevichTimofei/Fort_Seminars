import { storiesOf, addDecorator  } from '@storybook/vue';
import '@storybook/addon-notes/register';
import MyButton from '../../src/components/Button.vue';
import InputTextField from '../../src/components/InputTextField.vue';
import SectionTitle from '../../src/components/SectionTitle.vue';
import './styles.css';

addDecorator(() => ({
  template: `<div class="body"><story /></div>`,
}));

function Dark() {
  return {
    template: '<div style="background-color: #3E1229;"><story/></div>',
  }
}

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

storiesOf('SectionTitle', module)
  .add('section-title-dark', () => ({
    components: { SectionTitle },
    template: `<div style="background-color: white; height: 100px; padding: 100px 0">
                  <section-title title="Регистрация" classname="dark"/>
               </div>`,
    }),
    {
      notes: 'Этот компонент предназначен для использования на белом фоне.',
    }
  )
  .add('section-title-light', () => ({
    components: { SectionTitle },
    template: `<div style="background-color: #3E1229; height: 100px; padding: 100px 0">
                  <section-title title="Регистрация" classname="light"/>
               </div>`,
    }),
    {
      notes: 'Этот компонент предназначен для использования на тёмном фоне. Здесь тёмный фон не является частью компонента',
    }
  );
