<template>
    <div class="details-part" id="schedule">
        <SectionTitle title="Детали" classname="light" class="title"/>
        <vue-event-calendar
                class="calendar"
                :events="lessons"
                @month-changed="handleMonthChanged"
                @click="crutchForCalendar"
        >
        </vue-event-calendar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'DetailsPart',
  components: { SectionTitle },
  data() {
    return {
      monthNumber: (new Date().getMonth() + 1),
    };
  },
  computed: {
    ...mapGetters('lessons', { lessons: 'lessonsForCurMonth' }),
  },
  methods: {
    handleMonthChanged(data) {
      this.monthNumber = +data.split('.')[0];
      this.fetchLessonsByMonth(this.monthNumber);
    },
    crutchForCalendar(event) {
      if (event.target.className !== 'date-num'
          || !(event.target.parentNode.className.indexOf('event') >= 0)) {
        this.reWriteLessons();
      }
    },
    ...mapActions('lessons', ['reWriteLessons', 'fetchLessonsByMonth']),
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
