<template>
    <v-container v-if="probation_case">
        <div>
            <p class="title">
                เเก้ไข
            </p>
        </div>
        <div>
            <v-text-field
                    label="ศาล"
                    outlined
                    v-model="probation_case.case_data.court"
            >
            </v-text-field>
            <v-text-field
                    label="วันที่ศาลสั่ง"
                    outlined
                    type="date"

                    v-model="probation_case.case_data.date_court_ordered"
            >
            </v-text-field>
            <v-text-field
                    label="วันที่รับคดี"
                    type="date"

                    outlined
                    v-model="probation_case.case_data.date_case_acceptance"
            >
            </v-text-field>
            <v-text-field
                    label="พปค. เจ้าของคดี"
                    outlined
                    v-model="probation_case.case_data.governing_officer_case_owner"
            >
            </v-text-field>
            <v-text-field
                    label="สถานะทะเบียนคดี"
                    outlined
                    v-model="probation_case.case_data.registration_status"
            >
            </v-text-field>
        </div>
        <v-divider></v-divider>
        <div>
            <v-text-field
                    label="ฐานความผิด"
                    outlined
                    v-model="probation_case.offense"
            >
                <v-text-field
                        label="ภารกิจ"
                        outlined
                        v-model="probation_case.mission"
                >
                </v-text-field>
                <v-text-field
                        label="เลขคดีดำ"
                        outlined
                        v-model="probation_case.black_case_number"
                >
                </v-text-field>
                <v-text-field
                        label="เลขคดีเเดง"
                        outlined
                        v-model="probation_case.rad_case_number"
                >
                </v-text-field>
            </v-text-field>
            <v-text-field
                    label="วันครบกำหนดการคุมประพฤติ"
                    outlined
                    type="date"
                    v-model="probation_case.probation_deadline"
            >
            </v-text-field>
            <v-text-field
                    label="วันสิ้นสุดคดี"
                    outlined
                    type="date"

                    v-model="probation_case.case_ending_date"
            >
            </v-text-field>
            <v-text-field
                    label="ความเห็น ฟปค."
                    outlined
                    v-model="probation_case.governing_officer_comment"
            >
            </v-text-field>
            <v-text-field
                    label="ผลการคุมประพฤติ"
                    outlined
                    v-model="probation_case.probation_results"
            >
            </v-text-field>
        </div>
        <div class="d-flex justify-content-between">
            <v-btn color="grey" class="white--text" @click="$router.go(-1)">
                กลับ
            </v-btn>
            <v-btn color="green" class="white--text" @click="save">
                บันทึก
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "editCaseProbation",
        data() {
            return {
                probation_case: null
            }
        },
        async created() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.probation_case = await this.$store.dispatch("probation_case/getProbationCaseById", id)
            },
            async save () {
                console.log(this.probation_case)
                await  this.$store.dispatch('probation_case/updateProbationCase',this.probation_case)
            }


        }
    }
</script>

<style scoped>

</style>