<template lang="html">
<div>
    <div>
        <h1>Admin Stats</h1>
        <p>{{ totalBuoys }}</p>
        <!-- <p>All Buoys: {{ allBuoys }}</p> -->
        <p>Present: {{ presentBuoys.length }} / {{ totalBuoys }} ({{ presentBuoys.length / totalBuoys | percent }})</p>
    </div>
    <div
        class="py-8"
        style="width: 800px;"
        v-for="zone in zones">
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
    </div>
    <!-- <div class="buoy-map"></div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        zones() {
            return this.$store.state.zones;
        },
        allBuoys() {
            let all = [];
            for (let zone in this.zones) {
                const buoys = this.$store.state.zones[zone].buoys;
                for (let buoy in buoys) {
                    all.push(buoys[buoy]);
                }
            }
            // console.log(all);
            return all;
        },
        totalBuoys() {
            // let i = 0;
            // for (let zone in this.zones) {
            //     i += this.$store.state.zones[zone].buoys.length;
            //     // console.log(typeof zone);
            //     // // the following is undefined. Why???
            //     // console.log(zone);
            //     console.log(i);
            // }
            return this.allBuoys.length;
        },
        presentBuoys() {
            return this.allBuoys.filter(b => b.present === true);
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
