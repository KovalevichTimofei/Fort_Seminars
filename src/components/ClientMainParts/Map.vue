<template>
    <div id="place">
        <LMap
            :zoom="zoom"
            :center="center"
            class="map"
        >
            <LTileLayer :url="url" :attribution="attribution" />
            <LMarker :lat-lng="place"></LMarker>
        </LMap>
    </div>
</template>

<script>
import { latLng } from 'leaflet';
import {
  LMap, LTileLayer, LMarker,
} from 'vue2-leaflet';

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 17,
      center: latLng(52.114755, 23.699162),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      place: latLng(52.11515, 23.69975),
    };
  },
};
</script>

<style scoped>
    #place {
        height: 400px;
    }
    .map {
        height:400px;
        overflow:hidden;
    }
</style>
