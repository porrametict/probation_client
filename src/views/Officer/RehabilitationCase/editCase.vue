<template>
    <v-container v-if="rehabilitation_case">
        <div>
            <p class="title">
                เเก้ไข
            </p>
        </div>
        <div>
            <v-text-field
                    label="ศาล"
                    outlined
                    v-model="rehabilitation_case.case_data.court"
            >
            </v-text-field>
            <v-text-field
                    label="วันที่ศาลสั่ง"
                    outlined
                    type="date"
                    v-model="rehabilitation_case.case_data.date_court_ordered"
            >
            </v-text-field>
            <v-text-field
                    label="วันที่รับคดี"
                    type="date"
                    outlined
                    v-model="rehabilitation_case.case_data.date_case_acceptance"
            >
            </v-text-field>
            <v-text-field
                    label="พปค. เจ้าของคดี"
                    outlined
                    v-model="rehabilitation_case.case_data.governing_officer_case_owner"
            >
            </v-text-field>
            <v-text-field
                    label="สถานะทะเบียนคดี"
                    outlined
                    v-model="rehabilitation_case.case_data.registration_status"
            >
            </v-text-field>
        </div>
        <v-divider></v-divider>
        <div>
            <v-text-field
                    label="เลขทะเบียนตรวจพิสูจน์"
                    outlined
                    v-model="rehabilitation_case.proof_registration_number"
            ></v-text-field>
            <v-text-field
                    label="ฐานความผิด"
                    outlined
                    v-model="rehabilitation_case.offense"
            ></v-text-field>
            <v-text-field
                    label="ชื่อตามคำฟ้อง"
                    outlined
                    v-model="rehabilitation_case.name_in_indictment"
            ></v-text-field>
            <v-text-field
                    label="ประเภทยา"
                    outlined
                    v-model="rehabilitation_case.drug_type"
            ></v-text-field>
            <v-text-field
                    label="สถานีตำรวจ"
                    outlined
                    v-model="rehabilitation_case.police_station_name"
            ></v-text-field>
            <v-text-field
                    label="วันที่คณะอนุฯมีคำวินิฉัย"
                    outlined
                    type="date"
                    v-model="rehabilitation_case.date_decision"
            ></v-text-field>
            <v-text-field
                    label="สาเหตุการจำหน่าย"
                    outlined
                    v-model="rehabilitation_case.cause_distribution"
            ></v-text-field>
            <v-text-field
                    label="วันที่ปิดคดีฟื้นฟู"
                    outlined
                    type="date"
                    v-model="rehabilitation_case.rehabilitation_closing_date"
            ></v-text-field>
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
        name: "editCaseRehabilitation",
        data() {
            return {
                rehabilitation_case: null,
            }
        },
        async created() {
            await this.loadData()

        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.rehabilitation_case = await this.$store.dispatch("rehabilitation_case/getRehabilitationCaseById", id)
            },
            async save() {
                await this.$store.dispatch('rehabilitation_case/updateRehabilitationCase', this.rehabilitation_case)
            }

        }
    }
</script>

<style scoped>

</style>