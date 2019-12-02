<template>
    <div>
        <MainPart/>
        <PreacherPart/>
        <DetailsPart/>
        <VideoInvite/>
        <Registration/>
        <Contacts/>
    </div>
</template>

<script>
    import MainPart from '@/components/MainPart';
    import DetailsPart from "@/components/DetailsPart";
    import PreacherPart from '@/components/PreacherPart';
    import VideoInvite from "@/components/VideoInvite";
    import Registration from "@/components/Registration";
    import Contacts from "@/components/Contacts";

    import { mapState, mapActions } from 'vuex';

      export default {
        name: "ClientMain",
        components: {
          MainPart,
          DetailsPart,
          PreacherPart,
          VideoInvite,
          Registration,
          Contacts,
        },
        computed: mapState({
          seminar: state => state.seminars.seminar,
        }),
        methods: {
          ...mapActions('seminars', [
            'fetchCurrentSeminar',
          ]),
          ...mapActions('preachers', [
            'fetchCurrentPreacher',
          ]),
        },
        created() {
          this.fetchCurrentSeminar();
          this.fetchCurrentPreacher(this.seminar.preacher_id);
        }
      }
</script>

<style scoped>

</style>
