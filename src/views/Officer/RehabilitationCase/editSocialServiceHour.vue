<template>
    <v-container>
        <div>
            <p class="title">การบริการสังคม</p>
        </div>
        <div>
            <v-btn color="primary" @click="goto_create">
                เพิ่ม
            </v-btn>
        </div>
        <div v-if="socialservicehour_data_render">
            <div v-for="(c,index) in socialservicehour_data_render" :key="index">
                <div v-if="data_sel_index != index">
                    <data-list-render :data="[socialservicehour_data_render[index]]">
                        <template v-slot:header>
                            <div class="d-flex justify-content-between">
                                <p class="title white--text ">การบริการสังคม ที่ {{index +1 }}</p>
                                <div>
                                    <v-btn icon color="white" outlined class="ma-1" v-if="data_sel_index == null">
                                        <v-icon color="white" @click="delete_data(index)">mdi-trash-can</v-icon>
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
                                    label="ทั้งหมด"
                                    outlined
                                    v-model="data_sel.total_working_hours"
                                    :error="!!error.total_working_hours"
                                    :error-messages="error.total_working_hours"
                                    type="number"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="ทำเเล้ว"
                                    outlined
                                    v-model="data_sel.done_working_hours"
                                    :error="!!error.done_working_hours"
                                    :error-messages="error.done_working_hours"
                                    type="number"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="คงเหลือ"
                                    outlined
                                    v-model="data_sel.residual_working_hours"
                                    :error="!!error.residual_working_hours"
                                    :error-messages="error.residual_working_hours"
                                    type="number"
                            >
                            </v-text-field>

                        </v-card-text>
                    </v-card>
                </div>
            </div>

        </div>
    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        extends: Base,
        name: "editSSH",
        components: {DataListRender},
        data() {
            return {
                data_sel: null,
                data_sel_index: null,
                rehabilitation_case: null,
                socialservicehour_data_render: [],
            }
        },
        async created() {
            await this.loadData()
        },
        methods: {
            goto_create() {
                this.$router.push({name: 'RehabilitationCaseSSHCreate'})
            },
            async delete_data(index) {
                let id = this.rehabilitation_case.socialservicehour_set[index].id
                let result = await this.$store.dispatch('rehabilitation_case/deleteSSH', id)
                if (result != null) {
                    this.$router.go(0)
                }
            },
            async save_update(index) {
                let result = await this.$store.dispatch('rehabilitation_case/updateSSH', this.data_sel)
                if (result) {
                    this.$router.go(0)
                }
            },
            cancel_edit_mode() {
                this.data_sel_index = null
                this.data_sel = null
            },
            editMode(index) {
                console.log(index, this.rehabilitation_case.socialservicehour_set[index])
                this.data_sel_index = index
                this.data_sel = this.rehabilitation_case.socialservicehour_set[index]
            },
            async loadData() {
                let id = this.$route.params.id
                this.rehabilitation_case = await this.$store.dispatch("rehabilitation_case/getRehabilitationCaseById", id)
                this.socialservicehour_set_data()
            },
            socialservicehour_set_data() {
                let data_list = this.rehabilitation_case.socialservicehour_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.socialservicehour_data_render.length === 0) {
                        label = "ชั่วโมงการบริการสังคม"
                    }
                    this.socialservicehour_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "ทั้งหมด",
                                value: element.total_working_hours
                            },
                            {
                                key: "ทำเเล้ว",
                                value: element.done_working_hours
                            },
                            {
                                key: "คงเหลือ",
                                value: element.residual_working_hours
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