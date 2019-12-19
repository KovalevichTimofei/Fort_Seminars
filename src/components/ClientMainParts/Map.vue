<template>
    <div id="place">
        <LMap
            :zoom="mapProps.zoom"
            :center="mapProps.center"
            class="map"
        >
            <LTileLayer :url="mapProps.url" :attribution="attribution" />
            <LMarker :lat-lng="mapProps.place" />
            <LPolygon :lat-lngs="mapProps.sunDaySchoolContour.latlngs"/>
            <LPolygon
                :lat-lngs="mapProps.terrytoryContour.latlngs"
                :color="mapProps.terrytoryContour.color"
                :fillColor="mapProps.terrytoryContour.fillColor"
            />
            <LPolyline
                :lat-lngs="mapProps.pathToSeminarPlace.latlngs"
            />
        </LMap>
    </div>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPolygon, LPolyline,
} from 'vue2-leaflet';
import mapProps from '../../constants/mainMapProps.json';

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolygon,
    LPolyline,
  },
  data() {
    return {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  beforeCreate() {
    this.mapProps = mapProps;
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
