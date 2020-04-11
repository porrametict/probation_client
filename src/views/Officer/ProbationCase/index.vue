<template>
    <div>
        <v-container>
            <div>
                <p class="title">
                    <v-icon>
                        mdi-circle
                    </v-icon>
                    <span class="">
                       คดีควบคุม
                    </span>
                </p>
            </div>
            <v-spacer></v-spacer>

            <v-card>
                <v-card-title class="d-flex justify-content-between">
                    <div>
                        <v-btn
                                color="primary"
                                @click="$router.push({name:'ProbationCaseExcelUpload'})">
                            <v-icon>mdi-plus</v-icon>
                            เพิ่มข้อมูล
                        </v-btn>
                    </div>
                    <div>
                        <v-text-field
                                label="ค้นหา"
                                hide-details
                                append-icon="mdi-magnify"
                                class="ma-0 pa-0"
                                v-model="form_params.search"
                                @keypress.13="search"
                        ></v-text-field>
                    </div>
                </v-card-title>
                <v-divider class="pa-0 ma-0"></v-divider>

                <div>
                    <v-data-table
                            :headers="headers"
                            :items="data_table.results"
                            :options.sync="options"
                            hide-default-footer
                            class="elevation-1"
                    >
                        <template v-slot:item.case_ending_date="{item}">
                            {{getTHDate(item.case_ending_date)}}
                        </template>
                        <template v-slot:item.action="{item}">
                            <v-btn icon>
                                <v-icon @click="view(item.id)">mdi-eye</v-icon>
                            </v-btn>
                            <v-btn icon color="red">
                                <v-icon @click="confirmDelete(item.id)">mdi-trash-can</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                    <v-pagination v-model="page"
                                  :length="total_page"
                                  circle
                                  :total-visible="7"
                                  @input="change_page"
                    ></v-pagination>
                </div>
            </v-card>


        </v-container>
    </div>
</template>
<script>

    export default {
        name: "ProbationIndex",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                    search: null
                },
                options: {},
                headers: [
                    {
                        text: 'เลขทะเบียนคดี',
                        align: 'start',
                        sortable: false,
                        value: 'case_data.case_registration_number',
                    }, {
                        text: 'เลขคดีดำ',
                        align: 'center',
                        sortable: false,
                        value: 'black_case_number',
                    }, {
                        text: 'เลขคดีเเดง',
                        align: 'center',
                        sortable: false,
                        value: 'rad_case_number',
                    }, {
                        text: 'วันสิ้นสุดคดี',
                        align: 'center',
                        sortable: false,
                        value: 'case_ending_date',
                    }, {
                        text: 'จัดการ',
                        align: 'center',
                        sortable: false,
                        value: 'action',
                    },
                ],
            }
        },

        async mounted() {
            await this.loadData()
        },
        methods: {
            search() {
                this.loadData()
            },
            change_page(page) {
                this.form_params.page = page

                this.loadData()
            },
            async loadData() {
                this.loading = true
                this.data_table = await this.$store.dispatch("probation_case/getProbationCase", this.form_params)
                this.total_page = Math.ceil(this.data_table.count / 10)
            },
            view(id) {
                this.$router.push({name: "ProbationCaseView", params: {id: id}})
            },
            confirmDelete(id) {
                confirm('You want to delete this item ? ') && this.deleteItem(id)
            },
            async deleteItem(id) {
                let result = await this.$store.dispatch("probation_case/deleteProbationCase", id)
                if(result != null ) {
                    this.loadData()
                }
            }
        }
    }
</script>

<style scoped>

</style>