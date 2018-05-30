<template lang="html">
<div>
    <h1>Zone Component</h1>
    <!-- <div
        class="py-8"
        style="width: 800px;">
        <h1>{{ zone.label }}</h1>
        <div class="buoy-grid">
            <div v-for="buoy in zone.buoys">
                <div
                    class="buoy rounded-full text-2xl hover:cursor-pointer shadow-lg"
                    style="height:100px;width:100px;"
                    :class="{
                        'bg-yellow-light border-4 border-black': buoy.present,
                        'bg-blue-lightest border-2 border-gray': !buoy.present}"
                    @click="buoy.present = !buoy.present">
                    <p class="py-4">{{ buoy.id }}</p>
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="buoy-map"></div> -->
</div>
</template>

<script>
export default {
    props: ['zone'],
    data() {
        return {
        }
    },
    computed: {
        zones() {
            return this.$store.state.zones;
        }
    },
    methods: {
        makeBuoyActive(e) {
            console.log(e);
        }
    }
    // ,
    // mounted: function() {
    //     console.log('mounted');
    //     const mapElement = document.querySelector('.buoy-map');
    //
    //     const options = {
    //         zoom: 16,
    //         center: new google.maps.LatLng(24.452441, -81.876800),
    //         mapTypeId: 'satellite',
    //         disableDefaultUI: true,
    //         gestureHandling: 'none'
    //     }
    //
    //     const map = new google.maps.Map(mapElement, options);
    //
    //     this.state.buoyCoordinates.forEach((coord) => {
    //         const position = new google.maps.LatLng(coord.lat, coord.lon);
    //         const marker = new google.maps.Marker({
    //             position,
    //             map
    //         });
    //     });
    // }
}
</script>

<style lang="css">
.buoy-map {
    background-color: blue;
    height: 500px;
    width: 500px;
}

.buoy-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
}

.buoy {
    height: 100px;
    width: 100px;
    justify-self: center;
}

.hilight {
    background-color: green;
}
</style>
