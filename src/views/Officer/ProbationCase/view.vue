<template xmlns:template="http://www.w3.org/1999/html">
    <div>
        <v-container v-if="probation_case">
            <div>
                <p class="title">รายละเอียด</p>
            </div>
            <!--  main-->
            <div>
                <!--                offender-->
                <data-list-render :data="offender_data_render">
                    <template v-slot:header>
                        <div class="d-flex justify-content-between">
                            <div>


                                <div class="white--text">ผู้กระทำผิด</div>
                                <div class="title white--text mb-2">
                                    <p class="ma-0">
                                        {{probation_case.case_data.offender_data.o_personal_id}}
                                    </p>
                                    <p class="ma-0">
                                        {{probation_case.case_data.offender_data.o_first_name + " "
                                        +probation_case.case_data.offender_data.o_last_name}}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <v-btn icon outlined color="white">
                                    <v-icon @click="$router.push({name : 'viewOffender' ,params : {id : probation_case.case_data.offender_data.id}})">
                                        mdi-eye
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>

                    </template>
                </data-list-render>

                <!--case-->
                <data-list-render :data="case_data_render" color="pink">
                    <template v-slot:header>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="white--text">คดี</div>
                                <div class="title white--text mb-2">
                                    <p class="ma-0">
                                        {{probation_case.case_data.case_registration_number}}
                                    </p>
                                </div>

                            </div>
                            <div>
                                <v-btn icon outlined color="white">
                                    <v-icon @click="$router.push({name : 'ProbationCaseEdit' ,params : {id : probation_case.id}})">
                                        mdi-pencil
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </template>
                </data-list-render>

                <!--classification-->
                <data-list-render color="green" :data="classification_data_render">
                    <template v-slot:header>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="title white--text" >การจำเเนก</p>
                            </div>
                            <v-btn icon color="white" outlined @click="$router.push({name:'ProbationCaseClassificationEdit'})">
                                <v-icon>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </div>
                    </template>
                </data-list-render>
                <!--reporting-->
                <data-list-render color="orange" :data="reporting_data_render"></data-list-render>
            </div>
        </v-container>
    </div>
</template>

<script>
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        name: "ProbationView",
        components: {DataListRender},
        data() {
            return {
                probation_case: null,
                offender_data_render: null,
                case_data_render: null,
                classification_data_render: null,
                reporting_data_render: null,
            }
        },
        async mounted() {
            await this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.probation_case = await this.$store.dispatch("probation_case/getProbationCaseById", id)
                this.data_render_preparing()
            },
            data_render_preparing() {
                this.offender_data_render = [
                    {
                        label: "ข้อมูลพื้นฐาน",
                        data: [
                            {
                                key: "อายุ",
                                value: this.probation_case.case_data.offender_data.o_age
                            }, {
                                key: "เชื้อชาติ",
                                value: this.probation_case.case_data.offender_data.o_race
                            }, {
                                key: "สัญชาติ",
                                value: this.probation_case.case_data.offender_data.o_nationality
                            }, {
                                key: "การศึกษา",
                                value: this.probation_case.case_data.offender_data.o_education
                            }, {
                                key: "อาชีพ",
                                value: this.probation_case.case_data.offender_data.o_career
                            }, {
                                key: "ศาสนา",
                                value: this.probation_case.case_data.offender_data.o_religion
                            }, {
                                key: "สถานภาพ",
                                value: this.probation_case.case_data.offender_data.o_marital_status
                            },
                        ]
                    }
                ];
                this.case_data_render = [
                    {
                        label: "ข้อมูลพื้นฐาน",
                        data: [
                            {
                                key: "ศาล",
                                value: this.probation_case.case_data.court
                            },
                            {
                                key: "วันที่ศาลสั่ง",
                                value: this.probation_case.case_data.date_court_ordered
                            },
                            {
                                key: "วันที่รับคดี",
                                value: this.probation_case.case_data.date_case_acceptance
                            },
                            {
                                key: "พปค. เจ้าของคดี",
                                value: this.probation_case.case_data.governing_officer_case_owner
                            },
                            {
                                key: "สถานะทะเบียนคดี",
                                value: this.probation_case.case_data.registration_status
                            },
                        ]
                    },
                    {
                        label: "ข้อมูลเพิ่มเติม",
                        data: [
                            {
                                key: "ฐานความผิด",
                                value: this.probation_case.offense
                            },
                            {
                                key: "ภารกิจ",
                                value: this.probation_case.mission
                            },
                            {
                                key: "เลขคดีดำ",
                                value: this.probation_case.black_case_number
                            },
                            {
                                key: "เลขคดีเเดง",
                                value: this.probation_case.rad_case_number
                            },
                            {
                                key: "วันครบกำหนดการคุมประพฤติ",
                                value: this.probation_case.probation_deadline
                            },
                            {
                                key: "วันสิ้นสุดคดี",
                                value: this.probation_case.case_ending_date
                            },
                            {
                                key: "ความเห็น ฟปค.",
                                value: this.probation_case.governing_officer_comment
                            },
                            {
                                key: "ผลการคุมประพฤติ",
                                value: this.probation_case.probation_results
                            },
                        ]
                    }
                ];
                this.classification_data_render = []
                this.reporting_data_render = []
                this.classification_set_data()
                this.reporting_set_data()
            },
            classification_set_data() {
                let data_list = this.probation_case.classification_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.classification_data_render.length === 0) {
                        label = "การจำเเนก"
                    }
                    this.classification_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "ครั้งที่จำเเนก",
                                value: element.classification_time
                            }, {
                                key: "วันที่จำเเนก",
                                value: element.classification_date
                            }, {
                                key: "ระดับการควบคุม",
                                value: element.control_level
                            }, {
                                key: "ความเสี่ยง",
                                value: element.rick
                            },
                        ]
                    })
                });
            },
            reporting_set_data() {
                let data_list = this.probation_case.reporting_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.reporting_data_render.length === 0) {
                        label = "การรายงาน"
                    }
                    this.reporting_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "ครั้งที่รายงาน",
                                value: element.reporting_time
                            }, {
                                key: "การรายงาน",
                                value: element.report_status
                            }, {
                                key: "การบริการสังคม",
                                value: element.social_service
                            }, {
                                key: "กิจกรรมฟื้นฟู",
                                value: element.rehabilitation_activities
                            }, {
                                key: "วันที่ส่งรายงาน",
                                value: element.report_submission_date
                            },
                        ]
                    })
                });
            },
        }
    }
</script>

<style scoped>

</style>