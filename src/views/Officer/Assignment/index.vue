<template>
    <div>
        <v-container>
            <div>
                <p class="title">
                    <v-icon>
                        mdi-circle
                    </v-icon>
                    <span class="">
                       การมอบหมายงาน
                    </span>
                </p>
                <v-spacer></v-spacer>
            </div>
            <v-card>
                <v-card-title class="d-flex justify-content-between">
                    <div >
                        <v-btn
                                color="primary"
                                @click="$router.push({name:'AssignmentCreate'})">
                            <v-icon>mdi-plus</v-icon>
                            สร้าง
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
                <v-data-table
                        :headers="headers"
                        :items="data_table.results"
                        :options.sync="options"
                        hide-default-footer
                        class="elevation-1"
                >
                    <template v-slot:item.offender="{item}">
                        {{item.offender_data.o_first_name}}
                        {{item.offender_data.o_last_name}}
                    </template>
                    <template v-slot:item.volunteer="{item}">
                        {{item.volunteer_data.first_name}}
                        {{item.volunteer_data.last_name}}
                    </template>
                    <template v-slot:item.form_type="{item}">
                        {{getFormType(item.form_type)}}
                    </template>
                    <template v-slot:item.status="{item}">
                        {{getAssignmentStatus(item.status)}}
                    </template>
                    <template v-slot:item.created_at="{item}">
                        {{getTHDate(item.created_at)}}
                    </template>
                    <template v-slot:item.action="{item}">
                        <v-btn icon>
                            <v-icon @click="view(item.id)">mdi-eye</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon @click="edit(item.id)">mdi-pencil</v-icon>
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
            </v-card>
        </v-container>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AssignmentIndex",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                    search : null
                },
                options: {},
                headers: [
                    {
                        text: 'อสค.',
                        align: 'center',
                        sortable: false,
                        value: 'volunteer',
                    }, {
                        text: 'ผู้ถูกคุม',
                        align: 'center',
                        sortable: false,
                        value: 'offender',
                    },
                    {
                        text: 'ประเภท',
                        align: 'center',
                        sortable: false,
                        value: 'form_type',
                    },
                    {
                        text: 'สถานะ',
                        align: 'center',
                        sortable: false,
                        value: 'status',
                    },
                    {
                        text: 'สร้างเมื่อ',
                        align: 'center',
                        sortable: false,
                        value: 'created_at',
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
        computed: {
            ...mapGetters({
                getFormType: 'assignment/getFormType',
                getAssignmentStatus: 'assignment/getAssignmentStatus',
                getVolunteer: 'volunteer/getVolunteer',
            })
        },
        methods: {
            search () {
                this.loadData()
            },
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            async loadData() {
                this.data_table = await this.$store.dispatch("assignment/getAssignment", this.form_params)
                this.total_page = Math.ceil(this.data_table.count / 10)
            },
            view(id) {
                this.$router.push({name: "AssignmentView", params: {id: id}})
            },
            edit(id) {
                this.$router.push({name: "AssignmentEdit", params: {id: id}})
            },
            confirmDelete (id) {
                confirm('You want to delete this item ? ') && this.deleteAssignment(id)
            },
            async deleteAssignment(id) {
                let result = await this.$store.dispatch('assignment/deleteAssignment', id)
                if (result != null) {
                    this.loadData()
                }
            }

        }
    }
</script>

<style scoped>

</style>