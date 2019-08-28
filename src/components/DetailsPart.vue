<template>
    <div class="details-part">
        <div class="title">Детали</div>
        <div class="title-shadow">Детали</div>
        <vue-event-calendar class="calendar" :events="demoEvents"></vue-event-calendar>
    </div>
</template>

<script>
  import Vue from 'vue';
  import 'vue-event-calendar/dist/style.css';
  import vueEventCalendar from 'vue-event-calendar';

  Vue.use(vueEventCalendar, {locale: 'ru'});
  export default {
    name: "DetailsPart",
    data() {
      return {
        demoEvents: [{
          date: '2019/08/08',
          title: 'Часть 1',
        }, {
          date: '2019/08/15',
          title: 'Часть 2',
          desc: 'Часть 2 семинара "Душепопечение, как это работает?"',
        }],
      };
    },
  }
</script>

<style lang="scss" type="text/scss" scoped>
    .details-part {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #3E1229;
        color: white;
        text-transform: uppercase;
        font-size: 30px;

        .title {
            margin: 50px;
            color: firebrick;
            font-size: 30px;
            position: relative;
            z-index: 1;
        }
        .title-shadow {
            font-size: 8rem;
            line-height: 8rem;
            margin: 0;
            opacity: .1;
            position: absolute;
            z-index: 0;
            color: white;
        }
    }
</style>

<style lang="scss" type="text/scss">
    .calendar {
        .cal-wrapper .cal-header {
            padding-bottom: 0;
            color: #2c3e50;
            //font-family: Avenir,Helvetica,Arial,sans-serif;
            font-size: 15px;
        }
        .title {
            color: black;
        }
    }
</style>
