<template>
    <v-container class="">
        <!--        <div class="title">-->
        <!--            This is a Home page-->
        <!--        </div>-->
        <div v-if="assignment_status">
            <TwoLineReport class="ma-3"
                           label="จำนวนเเบบสำรวจ"
                           :data="assignment_status"
            ></TwoLineReport>
        </div>
        <div v-if="case_type">
            <PieChart class="ma-3" label="จำนวนคดีเเบ่งตามประเภท" :values="case_type.values"
                      :labels=case_type.labels></PieChart>
        </div>
        <div v-if="offender_by_province">

            <BarChart class="ma-3"
                      :values="offender_by_province.values"
                      :labels="offender_by_province.labels"
                      :horizontal="true"
            >
                <template v-slot:header>
                    <div class="d-flex align-center justify-space-between">
                        <p class="pa-0 ma-0 mx-2">
                            แผนภูมิเเท่ง : 5 อันดับจำนวนผู้ถูกคุม เเบ่งตาม
                        </p>
                        <v-select
                                class="pa-0 ma-0"
                                v-model="form_params.r_type"
                                item-text="name"
                                item-value="value"
                                :items="[
                                    {value:'province',name : 'จังหวัด'},
                                    {value:'amphure',name : 'อำเภอ'},
                                    {value:'district',name : 'ตำบล'},
                                    ]"
                                outlined
                                hide-details
                                @change="loadOffender"
                        >
                        </v-select>
                    </div>

                </template>
            </BarChart>
        </div>

    </v-container>
</template>
<script>
    import PieChart from "../components/Report/PieChart";
    import TwoLineReport from "../components/Report/NumberReport";
    import BarChart from "../components/Report/Barchart";

    export default {
        name: 'Home',
        components: {BarChart, TwoLineReport, PieChart},
        created() {
            this.loadData()
        },
        data() {
            return {
                form_params: {
                    r_type: 'province'
                },
                case_type: null,
                assignment_status: null,
                offender_by_province: null,
            }
        },
        methods: {
            async loadData() {
                this.case_type = await this.$store.dispatch('report_chart/getCaseType')
                this.assignment_status = await this.$store.dispatch('report_chart/getAssignmentStatus')
                this.assignment_status['value_color'] = ['blue--text', 'green--text']
                await this.loadOffender()
            },
            async loadOffender() {
                this.offender_by_province = null
                this.offender_by_province = await this.$store.dispatch('report_chart/getOffenderByProvince', this.form_params)

            }
        },
    }
</script>
