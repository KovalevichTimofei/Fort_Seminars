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

<style scoped>
    .video{
        width: 100%;
        min-height: 720px;
    }
</style>
