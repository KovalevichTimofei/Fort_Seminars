<template>
    <iframe
            v-if="seminar.invite_link"
            id="invite"
            class="video"
            v-bind:src="seminar.invite_link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VideoInvite',
  computed: mapState('seminars', ['seminar']),
};
</script>

<style lang="scss" type="text/scss" scoped>
    .video {
        width: 100%;
        min-height: 720px;

        @media(max-width: 1280px) {
            min-height: 500px;
        }
        @media(max-width: 890px) {
            min-height: 300px;
        }
        @media(max-width: 530px) {
            min-height: 200px;
        }
    }
</style>
