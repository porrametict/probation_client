<template>
    <div>
        <v-container v-if="rehabilitation_case">
            <div>
                <p class="title">รายละเอียด</p>
            </div>
            <!--            main-->
            <div>
                <!--                offender-->
                <v-card class="ma-3" color="primary">
                    <v-card-text>
                        <div class="white--text">ผู้กระทำผิด</div>
                        <div class="title text--primary mb-2">
                            <p class="ma-0 white--text">
                                {{rehabilitation_case.case.offender.o_personal_id}}
                            </p>
                            <p class="ma-0 white--text">
                                {{rehabilitation_case.case.offender.o_first_name + " "
                                +rehabilitation_case.case.offender.o_last_name}}
                            </p>
                        </div>
                        <div>
                            <p class="white--text">ข้อมูลพื้นฐาน</p>
                            <div class="ma-1">
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            อายุ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_age">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            เชื้อชาติ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_race">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            สัญชาติ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_nationality">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            การศึกษา
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_education">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            อาชีพ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_career">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            ศาสนา
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_religion">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            สถานภาพ
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.offender.o_marital_status">
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>

                <!--                case-->

                <v-card class="ma-3" color="pink">
                    <v-card-text>
                        <div class="white--text">คดี</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{rehabilitation_case.case.case_registration_number}}
                            </p>
                        </div>
                        <div class="ma-1">
                            <p class="white--text">ข้อมูลพื้นฐาน</p>
                            <div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            ศาล
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.court">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            วันที่ศาลสั่ง
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="getTHDate(rehabilitation_case.case.date_court_ordered)">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            วันที่รับคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="getTHDate(rehabilitation_case.case.date_case_acceptance)">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            พปค. เจ้าของคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.governing_officer_case_owner">
                                        </v-card-text>
                                    </v-card>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200"
                                            min-width="200">
                                        <v-card-text class="pa-2">
                                            สถานะทะเบียนคดี
                                        </v-card-text>
                                    </v-card>
                                    <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                        <v-card-text class="pa-2 text--primary"
                                                     v-text="rehabilitation_case.case.registration_status">
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                        <!-- rehabilitation_case-->
                        <div class="ma-1">
                            <p class="white--text">ข้อมูลเพิ่มเติม</p>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        เลขทะเบียนตรวจพิสูจน์
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.proof_registration_number">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ฐานความผิด
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.offense">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ชื่อตามคำฟ้อง
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.name_in_indictment">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ประเภทยา
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.drug_type">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        สถานีตำรวจ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.police_station_name">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่คณะอนุมีคำวินิฉัย
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(rehabilitation_case.date_decision)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        สาเหตุการจำหน่าย
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="rehabilitation_case.cause_distribution">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่ปิดคดีฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(rehabilitation_case.rehabilitation_closing_date)">
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>

                <!--การฟื้นฟู-->
                <v-card class="ma-3" color="green">
                    <v-card-text>
                        <p class="white--text">การฟื้นฟู</p>
                        <div v-for="(c,index) in rehabilitation_case.rehabilitation_set" :key="index" class="my-3">
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        โปรแกรมการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rehabilitation_plan">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่ครบกำหนดระยะเวลาการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(c.due_date_rehabilitation_period)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่เข้ารับการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(c.date_rehabilitation)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ระยะเวลาการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rehabilitation_period">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        โปรแกรมการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rehabilitation_program">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        วันที่สิ้นสุดการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="getTHDate(c.rehabilitation_end_date)">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ผลการฟื้นฟู
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.rehabilitation_effect">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <v-divider></v-divider>
                        </div>
                    </v-card-text>
                </v-card>

                <!--social service hour-->
                <v-card class="ma-3" color="orange">
                    <v-card-text >
                        <p class="white--text">ชั่วโมงการบริการสังคม</p>
                        <div v-for="(c,index) in rehabilitation_case.socialservicehour_set" :key="index" class="my-3">
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ทั้งหมด
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.total_working_hours">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        ทำเเล้ว
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.done_working_hours">
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="d-flex flex-row">
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                                    <v-card-text class="pa-2">
                                        คงเหลือ
                                    </v-card-text>
                                </v-card>
                                <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                                    <v-card-text class="pa-2 text--primary"
                                                 v-text="c.residual_working_hours">
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
        name: "RehabilitationView",
        data() {
            return {
                rehabilitation_case: null
            }
        },
        async mounted() {
            await this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.rehabilitation_case = await this.$store.dispatch("rehabilitation_case/getRehabilitationCaseById", id)
            }
        }
    }
</script>

<style scoped>

</style>