<template>
    <div>
        <v-container v-if="rehabilitation_case">
            <div>
                <p class="title">รายละเอียด</p>
            </div>
            <!--            main-->
            <div>
                <!--                offender-->
                <data-list-render :data="offender_data_render">
                    <template v-slot:header>
                        <div class="white--text">ผู้กระทำผิด</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{rehabilitation_case.case_data.offender_data.o_personal_id}}
                            </p>
                            <p class="ma-0">
                                {{rehabilitation_case.case_data.offender_data.o_first_name + " "
                                +rehabilitation_case.case_data.offender_data.o_last_name}}
                            </p>
                        </div>
                    </template>
                </data-list-render>

                <!--                case-->
                <data-list-render :data="case_data_render" color="pink">
                    <template v-slot:header>
                        <div class="white--text">คดี</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{rehabilitation_case.case_data.case_registration_number}}
                            </p>
                        </div>
                    </template>
                </data-list-render>

                <!--การฟื้นฟู-->
                <data-list-render :data="rehabilitation_data_render" color="green">
                </data-list-render>

                <!--social service hour-->
                <data-list-render :data="socialservicehour_data_render" color="orange"></data-list-render>

            </div>
        </v-container>
    </div>
</template>

<script>
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        name: "RehabilitationView",
        components: {DataListRender},
        data() {
            return {
                rehabilitation_case: null,
                offender_data_render: null,
                case_data_render: null,
                rehabilitation_data_render: null,
                socialservicehour_data_render: null,
            }
        },
        async mounted() {
            await this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.rehabilitation_case = await this.$store.dispatch("rehabilitation_case/getRehabilitationCaseById", id)
                this.data_render_preparing()

            },
            data_render_preparing() {
                this.offender_data_render = [
                    {
                        label: "ข้อมูลพื้นฐาน",
                        data: [
                            {
                                key: "อายุ",
                                value: this.rehabilitation_case.case_data.offender_data.o_age
                            }, {
                                key: "เชื้อชาติ",
                                value: this.rehabilitation_case.case_data.offender_data.o_race
                            }, {
                                key: "สัญชาติ",
                                value: this.rehabilitation_case.case_data.offender_data.o_nationality
                            }, {
                                key: "การศึกษา",
                                value: this.rehabilitation_case.case_data.offender_data.o_education
                            }, {
                                key: "อาชีพ",
                                value: this.rehabilitation_case.case_data.offender_data.o_career
                            }, {
                                key: "ศาสนา",
                                value: this.rehabilitation_case.case_data.offender_data.o_religion
                            }, {
                                key: "สถานภาพ",
                                value: this.rehabilitation_case.case_data.offender_data.o_marital_status
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
                                value: this.rehabilitation_case.case_data.court
                            },
                            {
                                key: "วันที่ศาลสั่ง",
                                value: this.rehabilitation_case.case_data.date_court_ordered
                            },
                            {
                                key: "วันที่รับคดี",
                                value: this.rehabilitation_case.case_data.date_case_acceptance
                            },
                            {
                                key: "พปค. เจ้าของคดี",
                                value: this.rehabilitation_case.case_data.governing_officer_case_owner
                            },
                            {
                                key: "สถานะทะเบียนคดี",
                                value: this.rehabilitation_case.case_data.registration_status
                            },
                        ]
                    },
                    {
                        label: "ข้อมูลเพิ่มเติม",
                        data: [
                            {
                                key: "เลขทะเบียนตรวจพิสูจน์",
                                value: this.rehabilitation_case.proof_registration_number
                            },
                            {
                                key: "ฐานความผิด",
                                value: this.rehabilitation_case.offense
                            },
                            {
                                key: "ชื่อตามคำฟ้อง",
                                value: this.rehabilitation_case.name_in_indictment
                            },
                            {
                                key: "ประเภทยา",
                                value: this.rehabilitation_case.drug_type
                            },
                            {
                                key: "สถานีตำรวจ",
                                value: this.rehabilitation_case.police_station_name
                            },
                            {
                                key: "วันที่คณะอนุฯมีคำวินิฉัย",
                                value: this.rehabilitation_case.date_decision
                            },
                            {
                                key: "สาเหตุการจำหน่าย",
                                value: this.rehabilitation_case.cause_distribution
                            },
                            {
                                key: "วันที่ปิดคดีฟื้นฟู",
                                value: this.rehabilitation_case.rehabilitation_closing_date
                            },
                        ]
                    }
                ];
                this.rehabilitation_data_render = []
                this.socialservicehour_data_render = []
                this.rehabilitation_set_data()
                this.socialservicehour_set_data()
            },
            rehabilitation_set_data() {
                let data_list = this.rehabilitation_case.rehabilitation_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.rehabilitation_data_render.length === 0) {
                        label = "การฟื้นฟู"
                    }
                    this.rehabilitation_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "แผนการฟื้นฟู",
                                value: element.rehabilitation_plan
                            },
                            {
                                key: "โปรแกรมการฟื้นฟู",
                                value: element.rehabilitation_program
                            },
                            {
                                key: "วันที่เข้ารับการฟื้นฟู",
                                value: element.date_rehabilitation
                            },
                            {
                                key: "ระยะเวลาการฟื้นฟู",
                                value: element.rehabilitation_period
                            },
                            {
                                key: "วันที่ครบกำหนดระยะเวลาการฟื้นฟู",
                                value: element.due_date_rehabilitation_period
                            },
                            {
                                key: "วันที่สิ้นสุดการฟื้นฟู",
                                value: element.rehabilitation_end_date
                            },
                            {
                                key: "ผลการฟื้นฟู",
                                value: element.rehabilitation_effect
                            },
                        ]
                    })
                });
            },
            socialservicehour_set_data() {
                let data_list = this.rehabilitation_case.socialservicehour_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.socialservicehour_data_render.length === 0) {
                        label = "ชั่วโมงการบริการสังคม"
                    }
                    this.socialservicehour_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "ทั้งหมด",
                                value: element.total_working_hours
                            },
                            {
                                key: "ทำเเล้ว",
                                value: element.done_working_hours
                            },
                            {
                                key: "คงเหลือ",
                                value: element.residual_working_hours
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