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
import MainPart from './components/MainPart.vue';
import DetailsPart from "@/components/DetailsPart";
import PreacherPart from '@/components/PreacherPart.vue';
import VideoInvite from "@/components/VideoInvite";
import Registration from "@/components/Registration";
import Contacts from "@/components/Contacts";

export default {
  name: 'app',
  components: {
    MainPart,
    DetailsPart,
    PreacherPart,
    VideoInvite,
    Registration,
    Contacts,
  }
}
</script>

<style>
  @font-face {
    font-family: GothamProNarrow;
    src: url(fonts/GothamProNarrow.ttf);
  }
  body {
    margin: 0;
    font-family: GothamProNarrow;
    text-transform: uppercase;
  }
  #app {

  }
</style>
