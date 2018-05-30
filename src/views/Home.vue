<template>
<div class="home">
    <h1>Please help us keep the mooring buoy program busy!</h1>
    <h3>Report missing buoys!</h3>
</div>
</template>

<script>
// @ is an alias to /src
import Zone from '@/components/Zone.vue'
import Report from '@/components/Report.vue'

export default {
  name: 'home',
  components: {
    Zone,
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
