<template>
    <v-container>
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       สร้างการรายงาน
                    </span>
            </p>
        </div>

        <v-card>
            <v-card-text>
                <div v-if="!loading">
                    <v-text-field
                            label="ครั้งที่รายงาน"
                            outlined
                            v-model="form.reporting_time"
                            :error="!!error.reporting_time"
                            :error-messages="error.reporting_time"
                            type="number"

                    >
                    </v-text-field>
                    <v-text-field
                            label="การรายงาน"
                            outlined
                            v-model="form.report_status"
                            :error="!!error.report_status"
                            :error-messages="error.report_status"
                    >
                    </v-text-field>
                    <v-text-field
                            label="การบริการสังคม"
                            outlined
                            v-model="form.social_service"
                            :error="!!error.social_service"
                            :error-messages="error.social_service"
                    >
                    </v-text-field>
                    <v-text-field
                            label="กิจกรรมฟื้นฟู"
                            outlined
                            v-model="form.rehabilitation_activities"
                            :error="!!error.rehabilitation_activities"
                            :error-messages="error.rehabilitation_activities"
                    >
                    </v-text-field>
                    <v-text-field
                            label="วันที่ส่งรายงาน"
                            outlined
                            v-model="form.report_submission_date"
                            :error="!!error.report_submission_date"
                            :error-messages="error.report_submission_date"
                            type="date"
                    >
                    </v-text-field>
                </div>
                <div class="d-flex justify-content-between">
                    <v-btn color="grey"
                           class="white--text"
                           large
                           @click="$router.go(-1)"
                    >
                        ยกเลิก
                    </v-btn>
                    <v-btn color="primary" class="ma-2" @click="save">
                        บันทึก
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";

    export default {
        extends: Base,
        name: "createReporting",
        data: () => ({
            form: {},
            probation_case: null,
            loading : true

        }),
        async created() {
            this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.probation_case = await this.$store.dispatch("probation_case/getProbationCaseById", id)
                this.get_current_time()
            },
            get_current_time () {
                if (this.probation_case.reporting_set && this.probation_case.reporting_set.length > 0 ) {
                    let maxtime = 0
                    this.probation_case.reporting_set.forEach(e=>{
                        if (e.reporting_time > maxtime) {
                            maxtime = e.reporting_time
                        }
                    })
                    this.form.reporting_time = maxtime +1
                }else {
                    this.form.reporting_time = 1
                }
                this.loading  =false
            },
            async save() {
                this.form.probation_case = this.$route.params.id
                if (await this.$store.dispatch('probation_case/createReporting', this.form)) {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>

</style>