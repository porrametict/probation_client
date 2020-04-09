<template>
    <v-container>
        <div>
            <p class="title">ผู้ถูกคุม</p>
        </div>

        <div>
            <div>
<!--                <v-btn color="primary" @click="$router.push({name:''})">-->
<!--                    <v-icon>mdi-plus</v-icon>-->
<!--                    เพิ่ม-->
<!--                </v-btn>-->
            </div>
            <v-data-table
                    v-if="data_table"
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
                    <v-btn icon color="red">
                        <v-icon @click="deleteUser(item.id)">mdi-trash-can</v-icon>
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
</template>

<script>

    export default {
        name: "OffenderIndex",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                },
                options: {},
                headers: [
                    {
                        text: 'ชื่อ',
                        align: 'left',
                        sortable: false,
                        value: 'o_personal_id',
                    } ,{
                        text: 'ชื่อ',
                        align: 'left',
                        sortable: false,
                        value: 'o_first_name',
                    }, {
                        text: 'นามสกุล',
                        align: 'left',
                        sortable: false,
                        value: 'o_last_name',
                    },
                    {
                        text: 'จัดการ',
                        align: 'center',
                        sortable: false,
                        value: 'action',
                    },
                ],
            }
        },
        computed: {
        },
        async created() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.data_table = await this.$store.dispatch('offender/getListUser', this.form_params)
                this.total_page = Math.ceil(this.data_table.count / 10)

            },
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            view(id) {
                this.$router.push({name: "viewOffender", params: {id: id}})
            },
            async deleteUser(id) {
                if (await this.$store.dispatch("offender/deleteUser", id) != null) {
                    this.loadData()
                }
            }
        }
    }
</script>

<style scoped>

</style>