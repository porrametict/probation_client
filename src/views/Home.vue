<template>
    <v-container class="">
        <!--        <div class="title">-->
        <!--            This is a Home page-->
        <!--        </div>-->
        <div v-if="assignment_status">
            <TwoLineReport class="ma-3" label="จำนวนเเบบสำรวจ" :values="assignment_status.values"
                           :labels=assignment_status.labels></TwoLineReport>
        </div>
        <div v-if="case_type">
            <PieChart class="ma-3"  label="จำนวนคดีเเบ่งตามประเภท" :values="case_type.values" :labels=case_type.labels></PieChart>
        </div>

    </v-container>
</template>
<script>
    import PieChart from "../components/share/PieChart";
    import TwoLineReport from "../components/share/TwoLineReport";

    export default {
        name: 'Home',
        components: {TwoLineReport, PieChart},
        created() {
            this.loadData()
        },
        data() {
            return {
                case_type: null,
                assignment_status: null,
            }
        },
        methods: {
            async loadData() {
                this.case_type = await this.$store.dispatch('report_chart/getCaseType')
                this.assignment_status = await this.$store.dispatch('report_chart/getAssignmentStatus')
            }
        },
    }
</script>
