<template lang="html">
<div>
    <h1>Marine Zone Map</h1>
    <div class="buoy-map"></div>
</div>
</template>

<script>
import state from '@/store'

export default {
    data() {
        return {

        }
    },
    mounted: function() {
        console.log('mounted');
        const mapElement = document.querySelector('.buoy-map');

        const options = {
            zoom: 16,
            center: new google.maps.LatLng(24.452441, -81.876800),
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            gestureHandling: 'none'
        }

        const map = new google.maps.Map(mapElement, options);

        this.state.buoyCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.lat, coord.lon);
            const marker = new google.maps.Marker({
                position,
                map
            });
        });
    }
}
</script>

<style lang="css">
    .buoy-map {
        background-color: blue;
        height: 500px;
        width: 500px;
    }
</style>
