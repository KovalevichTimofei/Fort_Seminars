<template>
    <div class="details-part" id="schedule">
        <SectionTitle title="Детали" classname="light" class="title"/>
        <vue-event-calendar class="calendar" :events="demoEvents"></vue-event-calendar>
    </div>
</template>

<script>
  import Vue from 'vue';
  import 'vue-event-calendar/dist/style.css';
  import vueEventCalendar from 'vue-event-calendar';
  import SectionTitle from "@/components/SectionTitle";

  Vue.use(vueEventCalendar, {locale: 'ru'});
  export default {
    name: "DetailsPart",
    components: { SectionTitle },
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
            margin-bottom: 80px;

            @media(max-width: 720px) {
                margin-bottom: 50px;
            }
        }
        @media(max-width: 720px) {
            padding: 30px 0;
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
        @media(max-width: 1250px) {
            .cal-wrapper, .events-wrapper {
                width: 46%;
            }
        }
        @media(max-width: 767px) {
            width: 50%;
            .cal-wrapper, .events-wrapper {
                width: 100%;
            }
        }
        @media(max-width: 500px) {
            width: 70%;
            .cal-wrapper, .events-wrapper {
                width: 100%;
            }
        }
    }
</style>









