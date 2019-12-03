<template>
    <div class="details-part" id="schedule">
        <SectionTitle title="Детали" classname="light" class="title"/>
        <vue-event-calendar
                class="calendar"
                :events="lessons"
                @month-changed="handleMonthChanged"
        >
        </vue-event-calendar>
    </div>
</template>

<script>
import Vue from 'vue';
import 'vue-event-calendar/dist/style.css';
import vueEventCalendar from 'vue-event-calendar';
import { mapState, mapActions } from 'vuex';
import SectionTitle from '@/components/SectionTitle';


Vue.use(vueEventCalendar, { locale: 'ru', color: '#cf5353' });
export default {
  name: 'DetailsPart',
  components: { SectionTitle },
  data() {
    return {
      monthNumber: (new Date().getMonth() + 1),
    };
  },
  computed: {
    ...mapState('lessons', {
      lessons: (state) => state.lessons.map((el) => {
        const date = new Date(el.date);
        return {
          date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
          title: el.part_numb ? `Часть ${el.part_numb}` : el.info,
          desc: el.part_numb ? el.info : '',
        };
      }),
    }),
  },
  methods: {
    handleMonthChanged(data) {
      this.monthNumber = +data.split('.')[0];
      this.fetchLessonsByMonth(this.monthNumber);
      document.getElementsByClassName('calendar')[0].addEventListener('click', this.func);
    },
    crutchForCalendar(event) {
      if (event.target.className !== 'date-num'
          || !(event.target.parentNode.className.indexOf('event') >= 0)) {
        this.reWriteLessons();
      }
    },
    ...mapActions('lessons', ['reWriteLessons']),
  },
  mounted() {
    document.getElementsByClassName('calendar')[0].addEventListener('click', this.crutchForCalendar);
  },
  updated() {
    document.getElementsByClassName('calendar')[0].addEventListener('click', this.crutchForCalendar);
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../../assets/theme";

    .details-part {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $dark-main-color;
        color: $dark-letters-color;
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
    @import "../../assets/theme";

    .calendar {
        .cal-wrapper .cal-header {
            padding-bottom: 0;
            color: $dark-main-color;
            //font-family: Avenir,Helvetica,Arial,sans-serif;
            font-size: 15px;
        }
        .events-wrapper {
            background-color: $light-letters-color;
        }
        .title {
            color: $dark-letters-color;
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
