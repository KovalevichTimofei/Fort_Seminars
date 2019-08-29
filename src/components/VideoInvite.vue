<template>
    <iframe
            id="invite"
            class="video"
            src="https://www.youtube.com/embed/z14zsBbfLec"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
</template>

<script>
  export default {
    name: "VideoInvite"
  }
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
