<template>
    <div>
        <v-container v-if="probation_case">
            <div>
                <p class="title">รายละเอียด</p>
            </div>
            <!--  main-->
            <div>
                <!--                offender-->
                <v-card class="ma-3" color="primary">
                    <v-card-text>
                        <div class="white--text">ผู้กระทำผิด</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{probation_case.case.offender.o_personal_id}}
                            </p>
                            <p class="ma-0">
                                {{probation_case.case.offender.o_first_name + " "
                                +probation_case.case.offender.o_last_name}}
                            </p>
                        </div>
                        <div>
                            <p class="white--text">ข้อมูลพื้นฐาน</p>
                            <div class="ma-1">
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            อายุ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_age">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            เชื้อชาติ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_race">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            สัญชาติ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_nationality">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            การศึกษา
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_education">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            อาชีพ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_career">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            ศาสนา
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_religion">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            สถานภาพ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.offender.o_marital_status">
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>

                <!--case-->

                <v-card class="ma-3" color="pink">
                    <v-card-text>
                        <div class="white--text">คดี</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{probation_case.case.case_registration_number}}
                            </p>
                        </div>
                        <div class="ma-1">
                            <p class="white--text">ข้อมูลพื้นฐาน</p>
                            <div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            ศาล
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.court">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            วันที่ศาลสั่ง
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="getTHDate(probation_case.case.date_court_ordered)">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            วันที่รับคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="getTHDate(probation_case.case.date_case_acceptance)">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            พปค. เจ้าของคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.governing_officer_case_owner">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                        <v-card-text class="pa-2">
                                            สถานะทะเบียนคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="probation_case.case.registration_status">
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                        <!-- probation_case-->
                        <div class="ma-1">
                            <p class="white--text">ข้อมูลเพิ่มเติม</p>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ฐานความผิด
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.offense">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ภารกิจ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.mission">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        เลขคดีดำ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.black_case_number">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        เลขคดีเเดง
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.rad_case_number">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันครบกำหนดการคุมประพฤติ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(probation_case.probation_deadline)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันสิ้นสุดคดี
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(probation_case.case_ending_date)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ความเห็น ฟปค.
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.governing_officer_comment">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ผลการคุมประพฤติ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="probation_case.probation_results">
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
                <!--classification-->
                <v-card class="ma-3" color="green">
                    <v-card-text>
                        <p class="white--text">การจำเเนก</p>
                        <div v-for="(c,index) in probation_case.classification_set" :key="index" class="my-3">
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ครั้งที่จำเเนก
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.classification_time">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่จำเเนก
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(c.classification_date)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ระดับการควบคุม
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.control_level">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ความเสี่ยง
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rick">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <v-divider></v-divider>
                        </div>
                    </v-card-text>
                </v-card>
                <!--reporting-->
                <v-card class="ma-3" color="orange">
                    <v-card-text>
                        <p class="white--text">การรายงาน</p>
                        <div v-for="(c,index) in probation_case.reporting_set" :key="index" class="my-3">
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ครั้งที่รายงาน
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.reporting_time">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        การรายงาน
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.report_status">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        การบริการสังคม
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.social_service">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        กิจกรรมฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rehabilitation_activities">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่ส่งรายงาน
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(c.report_submission_date)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <v-divider></v-divider>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "ProbationView",
        data() {
            return {
                probation_case: null
            }
        },
        async mounted() {
            await this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.probation_case = await this.$store.dispatch("probation_case/getProbationCaseById", id)
            }
        }
    }
</script>

<style scoped>

</style>