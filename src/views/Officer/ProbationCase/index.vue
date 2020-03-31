<template>
    <div>
        <v-container>
            <div>
                <p class="title">คดีควบคุม</p>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        @click="$router.push({name:'ProbationCaseExcelUpload'})">
                    <v-icon>mdi-plus</v-icon>
                    เพิ่มข้อมูล
                </v-btn>
            </div>
            <div>
                <v-data-table
                        :headers="headers"
                        :items="data_table.results"
                        :options.sync="options"
                        hide-default-footer
                        class="elevation-1"
                >
                    <template v-slot:item.action="{item}">
                        <v-btn icon>
                            <v-icon @click="view(item.id)">mdi-eye</v-icon>
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
                    limit: 10,
                    offset: 0
                },
                options: {},
                headers: [
                    {
                        text: 'เลขทะเบียนคดี',
                        align: 'start',
                        sortable: false,
                        value: 'case.case_registration_number',
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
            change_page(page) {
                this.form_params.offset = (page * 10) -10;
                this.loadData()
            },
            async loadData() {
                this.loading = true
                this.data_table = await this.$store.dispatch("probation_case/getProbationCase", this.form_params)
                this.total_page =  Math.ceil (this.data_table.count / 10)
            },
            view(id) {
                console.log(id)
                this.$router.push({name: "ProbationCaseView", params : {id :id}})
            }
        }
    }
</script>

<style scoped>

</style>