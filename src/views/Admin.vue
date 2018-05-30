<template lang="html">
<div class="admin">
    <h1>Admin Page</h1>

    <NewBuoy></NewBuoy>
    <Buoy />
    <Buoys />

    <NewZone />
    <Zone />
    <Zones />

<!-- Previous Iteration Below     -->
    <!-- {{ dbRes }}
    <div>
        <h1>Admin Stats</h1>
        <p>{{ totalBuoys }}</p>
        <p>All Buoys: {{ allBuoys }}</p>
        <p>Present: {{ presentBuoys.length }} / {{ totalBuoys }} ({{ (presentBuoys.length / totalBuoys) | percent }})</p>
    </div>
    <Zone v-for="zone in zones" :zone="zone"></Zone> -->
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import NewBuoy from '@/components/NewBuoy'
import Buoy from '@/components/Buoy'
import Buoys from '@/components/Buoys'

import NewZone from '@/components/NewZone'
import Zone from '@/components/Zone'
import Zones from '@/components/Zones'

export default {
  name: 'home',
  components: {
      NewBuoy,
      Buoy,
      Buoys,
      NewZone,
      Zone,
      Zones
  },
  data() {
      return {
            dbRes: []
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
  created() {
      axios.get('/reports.json')
        .then(res => {
            const data = res.data;
            const reports = [];
            for (let key in data) {
                const report = data[key];
                report.id = key;
                reports.push(report);
            }
            this.dbRes = reports;
            console.log(reports);
            console.log(res);
        })
        .catch(err => console.log(err));
  }
}
</script>

<style lang="css">
</style>
