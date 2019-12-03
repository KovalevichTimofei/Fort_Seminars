<template>
    <div v-if="!seminarsLoading && !preacherLoading && !lessonsLoading">
        <MainPart/>
        <PreacherPart/>
        <DetailsPart/>
        <VideoInvite/>
        <Registration/>
        <Map/>
        <Contacts/>
    </div>
    <div v-else><CircleSpinner /></div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainPart from '@/components/ClientMainParts/MainPart';
import DetailsPart from '@/components/ClientMainParts/DetailsPart';
import PreacherPart from '@/components/ClientMainParts/PreacherPart';
import VideoInvite from '@/components/ClientMainParts/VideoInvite';
import Registration from '@/components/Registration';
import Map from '@/components/ClientMainParts/Map';
import Contacts from '@/components/ClientMainParts/Contacts';

export default {
  name: 'ClientMain',
  components: {
    MainPart,
    DetailsPart,
    PreacherPart,
    VideoInvite,
    Registration,
    Map,
    Contacts,
  },
  data() {
    return {
      monthNumber: (new Date().getMonth() + 1),
    };
  },
  computed: {
    ...mapState('seminars', {
      seminarsLoading: (state) => state.loading,
      seminar: 'seminar',
    }),
    ...mapState('preachers', {
      preacherLoading: (state) => state.loading,
    }),
    ...mapState('lessons', {
      lessonsLoading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions('seminars', [
      'fetchCurrentSeminar',
    ]),
    ...mapActions('preachers', [
      'fetchCurrentPreacher',
    ]),
    ...mapActions('lessons', [
      'fetchLessonsByMonth',
    ]),
  },
  async created() {
    await this.fetchCurrentSeminar();
    await this.fetchCurrentPreacher(this.seminar.preacher_id);
    await this.fetchLessonsByMonth(this.monthNumber);
  },
};
</script>

<style scoped>

</style>
