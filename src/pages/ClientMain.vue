<template>
    <div>
        <MainPart/>
        <PreacherPart/>
        <DetailsPart/>
        <VideoInvite/>
        <Registration/>
        <Map/>
        <Contacts/>
    </div>
</template>

<script>
    import MainPart from '@/components/ClientMainParts/MainPart';
    import DetailsPart from "@/components/ClientMainParts/DetailsPart";
    import PreacherPart from '@/components/ClientMainParts/PreacherPart';
    import VideoInvite from "@/components/ClientMainParts/VideoInvite";
    import Registration from "@/components/Registration";
    import Map from "@/components/ClientMainParts/Map";
    import Contacts from "@/components/ClientMainParts/Contacts";

    import { mapState, mapActions } from 'vuex';

      export default {
        name: "ClientMain",
        components: {
          MainPart,
          DetailsPart,
          PreacherPart,
          VideoInvite,
          Registration,
          Map,
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
