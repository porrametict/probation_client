<template>
    <v-container>
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       เเก้ไขรายละเอียด
                    </span>
            </p>
        </div>

        <v-card>
            <v-card-title>
                <div>
                    <v-btn color="primary" @click="goto_create">
                        เพิ่ม
                    </v-btn>
                </div>
            </v-card-title>
            <v-divider class="ma-0 pa-0"></v-divider>
            <div v-if="reporting_set_data" class="py-2">
                <div v-for="(c,index) in reporting_data_render" :key="index">
                    <div v-if="data_sel_index != index">
                        <data-list-render :data="[reporting_data_render[index]]">
                            <template v-slot:header>
                                <div class="d-flex justify-content-between">
                                    <p class="title white--text ">การรายงาน ที่ {{index +1 }}</p>
                                    <div>
                                        <v-btn icon color="white" outlined class="ma-1" v-if="data_sel_index == null">
                                            <v-icon color="white" @click="confirmDelete(index)">mdi-trash-can</v-icon>
                                        </v-btn>
                                        <v-btn icon outlined color="white" v-if="data_sel_index == null" class="ma-1">
                                            <v-icon color="white" @click="editMode(index)">mdi-pencil</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </template>
                        </data-list-render>
                    </div>
                    <div v-else>
                        <v-card class="ma-3 pa-3" color="orange">
                            <v-card-text>
                                <div class="d-flex justify-content-between">
                                    <div class="white--text title">
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                        เเก้ไข
                                    </div>
                                    <div>
                                        <v-btn color="grey" class="white--text ma-2" @click="cancel_edit_mode">
                                            ยกเลิก
                                        </v-btn>
                                        <v-btn color="primary" class="ma-2" @click="save_update(index)">
                                            บันทึก
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-text class="pa-3 white">
                                <v-text-field
                                        label="ครั้งที่รายงาน"
                                        outlined
                                        v-model="data_sel.reporting_time"
                                        :error="!!error.reporting_time"
                                        :error-messages="error.reporting_time"
                                        type="number"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="การรายงาน"
                                        outlined
                                        v-model="data_sel.report_status"
                                        :error="!!error.report_status"
                                        :error-messages="error.report_status"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="การบริการสังคม"
                                        outlined
                                        v-model="data_sel.social_service"
                                        :error="!!error.social_service"
                                        :error-messages="error.social_service"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="กิจกรรมฟื้นฟู"
                                        outlined
                                        v-model="data_sel.rehabilitation_activities"
                                        :error="!!error.rehabilitation_activities"
                                        :error-messages="error.rehabilitation_activities"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="วันที่ส่งรายงาน"
                                        outlined
                                        v-model="data_sel.report_submission_date"
                                        :error="!!error.report_submission_date"
                                        :error-messages="error.report_submission_date"
                                        type="date"
                                >
                                </v-text-field>

                            </v-card-text>
                        </v-card>
                    </div>
                </div>

            </div>
        </v-card>

    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        extends: Base,
        name: "editReporting",
        components: {DataListRender},
        data() {
            return {
                data_sel: null,
                data_sel_index: null,
                probation_case: null,
                reporting_data_render: [],
            }
        },
        async created() {
            await this.loadData()
        },
        methods: {
            goto_create() {
                this.$router.push({name: 'ProbationCaseReportingCreate'})
            },
            confirmDelete(id) {
                confirm('You want to delete this item ? ') && this.delete_data(id)
            },
            async delete_data(index) {
                let id = this.probation_case.reporting_set[index].id
                let result = await this.$store.dispatch('probation_case/deleteReporting', id)
                if (result != null) {
                    this.$router.go(0)
                }
            },
            async save_update(index) {
                let result = await this.$store.dispatch('probation_case/updateReporting', this.data_sel)
                if (result) {
                    this.$router.go(0)
                }
            },
            cancel_edit_mode() {
                this.data_sel_index = null
                this.data_sel = null
            },
            editMode(index) {
                console.log(index, this.probation_case.reporting_set[index])
                this.data_sel_index = index
                this.data_sel = this.probation_case.reporting_set[index]
            },
            async loadData() {
                let id = this.$route.params.id
                this.probation_case = await this.$store.dispatch("probation_case/getProbationCaseById", id)
                this.reporting_set_data()
            },
            reporting_set_data() {
                let data_list = this.probation_case.reporting_set
                data_list.forEach(element => {
                    let label = ""
                    label = "การจำเเนก"
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