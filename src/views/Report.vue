<template>
<div class="report">
    <div>
        <Report />
    </div>
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
