<template>
<div class="report">
    <h1>Report Page</h1>
    <Report />
</div>
</template>

<script>
// @ is an alias to /src
import Zone from '@/components/Zone.vue'
import Report from '@/components/Report.vue'

export default {
  name: 'report',
  components: {
    Report
  }
}
</script>
