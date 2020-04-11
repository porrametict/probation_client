<template>
    <v-container>
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       อสค.
                    </span>
            </p>
            <v-spacer></v-spacer>
        </div>

        <div>


            <v-card>
                <v-card-title class="d-flex justify-content-between">
                    <div>
                        <v-btn color="primary" @click="$router.push({name:'registerVolunteerUser'})">
                            <v-icon>mdi-plus</v-icon>
                            เพิ่ม
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
                    <template v-slot:item.action="{item}">
                        <v-btn icon>
                            <v-icon @click="view(item.id)">mdi-eye</v-icon>
                        </v-btn>
                        <v-btn icon color="red" :disabled="user_profile.user.id ==item.user.id">
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
        </div>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                    user_type: 1,
                    search: null

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
        computed: {
            ...mapState({
                user_profile: state => state.account.user_profile
            })
        },
        async created() {
            if (!this.user_profile) {
                await this.$store.dispatch("account/getUser")
            }
            await this.loadData()
        },
        methods: {
            search() {
                this.loadData()
            },
            async loadData() {
                this.data_table = await this.$store.dispatch('volunteer/getListUser', this.form_params)
                this.total_page = Math.ceil(this.data_table.count / 10)
            },
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            view(id) {
                this.$router.push({name: "editVolunteerUser", params: {id: id}})
            },
            confirmDelete(id) {
                confirm('You want to delete this item ? ') && this.deleteUser(id)
            },
            async deleteUser(id) {
                if (await this.$store.dispatch("volunteer/deleteUser", id) != null) {
                    this.loadData()
                }
            }
        }
    }
</script>

<style scoped>

</style>