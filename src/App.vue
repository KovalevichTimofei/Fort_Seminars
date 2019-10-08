<template>
    <div id="app">
        <MainPart/>
        <PreacherPart/>
        <DetailsPart/>
        <VideoInvite/>
        <Registration/>
        <Contacts/>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';

    import MainPart from './components/MainPart.vue';
    import DetailsPart from "@/components/DetailsPart";
    import PreacherPart from '@/components/PreacherPart.vue';
    import VideoInvite from "@/components/VideoInvite";
    import Registration from "@/components/Registration";
    import Contacts from "@/components/Contacts";

    import SignIn from "@/components/SignIn";
    import AdminMain from "@/components/AdminMain";
    import SeminarsList from "@/components/SeminarsList";
    import ListenersList from "@/components/ListenersList";

    import { mapState, mapActions } from 'vuex';

    const router = new VueRouter({
      routes: [
        { path: '/', component: MainPart },
        { path: '/signin', component: SignIn },
        { path: '/admin', component: AdminMain,
          children: [
            {
              path: '/admin/seminars',
              component: SeminarsList,
            },
            {
             path: '/admin/listeners',
              component: ListenersList,
            }
          ]}
      ]
    });

    export default {
      name: 'app',
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
      methods: mapActions([
        'seminars/fetchCurrentSeminar',
        'preachers/fetchCurrentPreacher',
      ]),
      async beforeCreate() {
        await this.$store.dispatch('seminars/fetchCurrentSeminar');
        await this.$store.dispatch('preachers/fetchCurrentPreacher', this.seminar.preacher_id);
      }
    }
</script>

<style>
  @font-face {
    font-family: GothamProNarrow;
    src: url(fonts/GothamProNarrow.ttf);
  }
  html{
      scroll-behavior:smooth
  }
  body {
    margin: 0;
    font-family: GothamProNarrow;
    text-transform: uppercase;
  }
  #app {

  }
</style>
