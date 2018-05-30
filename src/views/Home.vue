<template>
<div class="home">
    <h1>Home Page</h1>
    <Zones />
</div>
</template>

<script>
// @ is an alias to /src
import Zones from '@/components/Zones.vue'
import Report from '@/components/Report.vue'

export default {
  name: 'home',
  components: {
    Zones,
    Report
  },
  data() {
      return {
          allBuoysReported: false
      }
  },
  computed: {
      zones() {
          return this.$store.state.zones;
      }
  }
}
</script>
