<template lang="html">
<div>
    <h1>Do you see {{ zoneBuoyCount || "any" }} yellow SPA buoys?</h1>
    <input type="text" v-model.number="observedBuoyCount">
    <input type="submit" @click="submitReport">
    <div v-if="reportSubmittedSuccess">
        <p>Thank you for your report!</p>
        <p>You reported {{ observedBuoyCount }} / {{ zoneBuoyCount }} were present.</p>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "report",
    data() {
        return {
            zoneBuoyCount: 3,
            allBuoysPresent: true,
            observedBuoyCount: 0,
            reportSubmittedSuccess: false
        }
    },
    methods: {
        submitReport() {
            const report = {
                observedBuoyCount: this.observedBuoyCount
            }
            axios.post('/reports.json', report)
                .then(res => {
                    console.log(res);
                    this.observedBuoyCount = res.data.observedBuoyCount
                    this.reportSubmittedSuccess = true;
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="css">
</style>
