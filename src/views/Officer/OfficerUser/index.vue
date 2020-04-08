<template>
    <v-container>
        <div>
            <p class="title">เจ้าหน้าที่</p>
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
                        <v-icon @click="view(item.user.id)">mdi-eye</v-icon>
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
        name: "index",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                    user_type: 1
                },
                options: {},
                headers: [
                    {
                        text: 'ชื่อ',
                        align: 'left',
                        sortable: false,
                        value: 'user.first_name',
                    }, {
                        text: 'นามสกุล',
                        align: 'left',
                        sortable: false,
                        value: 'user.last_name',
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
        async created() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.data_table = await this.$store.dispatch('officer/getListUser', this.form_params)
            },
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            view(id) {
                this.$router.push({name: "editOfficerProfile", params: {id: id}})
            }
        }
    }
</script>

<style scoped>

</style>