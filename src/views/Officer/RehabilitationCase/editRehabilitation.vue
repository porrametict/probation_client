<template>
    <v-container>
        <div>
            <p class="title">การฟื้นฟู</p>
        </div>
        <div>
            <v-btn color="primary" @click="goto_create">
                เพิ่ม
            </v-btn>
        </div>
        <div v-if="rehabilitation_data_render">
            <div v-for="(c,index) in rehabilitation_data_render" :key="index">
                <div v-if="data_sel_index != index">
                    <data-list-render :data="[rehabilitation_data_render[index]]">
                        <template v-slot:header>
                            <div class="d-flex justify-content-between">
                                <p class="title white--text ">การฟื้นฟู ที่ {{index +1 }}</p>
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
                                    label="แผนการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.rehabilitation_plan"
                                    :error="!!error.rehabilitation_plan"
                                    :error-messages="error.rehabilitation_plan"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="แผนการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.rehabilitation_program"
                                    :error="!!error.rehabilitation_program"
                                    :error-messages="error.rehabilitation_program"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="วันที่เข้ารับการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.date_rehabilitation"
                                    :error="!!error.date_rehabilitation"
                                    :error-messages="error.date_rehabilitation"
                                    type="date"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="ระยะเวลาการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.rehabilitation_period"
                                    :error="!!error.rehabilitation_period"
                                    :error-messages="error.rehabilitation_period"
                                    type="number"

                            >
                            </v-text-field>
                            <v-text-field
                                    label="วันที่ครบกำหนดระยะเวลาการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.due_date_rehabilitation_period"
                                    :error="!!error.due_date_rehabilitation_period"
                                    :error-messages="error.due_date_rehabilitation_period"
                                    type="date"

                            >
                            </v-text-field>
                            <v-text-field
                                    label="วันที่สิ้นสุดการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.rehabilitation_end_date"
                                    :error="!!error.rehabilitation_end_date"
                                    :error-messages="error.rehabilitation_end_date"
                                    type="date"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="ผลการฟื้นฟู"
                                    outlined
                                    v-model="data_sel.rehabilitation_effect"
                                    :error="!!error.rehabilitation_effect"
                                    :error-messages="error.rehabilitation_effect"
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
        name: "editRehabilitation",
        components: {DataListRender},
        data() {
            return {
                data_sel: null,
                data_sel_index: null,
                rehabilitation_case: null,
                rehabilitation_data_render: [],
            }
        },
        async created() {
            await this.loadData()
        },
        methods: {
            goto_create() {
                this.$router.push({name: 'RehabilitationCaseRehabilitationCreate'})
            },
            async delete_data(index) {
                let id = this.rehabilitation_case.rehabilitation_set[index].id
                let result = await this.$store.dispatch('rehabilitation_case/deleteRehabilitation', id)
                if (result != null) {
                    this.$router.go(0)
                }
            },
            async save_update(index) {
                let result = await this.$store.dispatch('rehabilitation_case/updateRehabilitation', this.data_sel)
                if (result) {
                    this.$router.go(0)
                }
            },
            cancel_edit_mode() {
                this.data_sel_index = null
                this.data_sel = null
            },
            editMode(index) {
                console.log(index, this.rehabilitation_case.rehabilitation_set[index])
                this.data_sel_index = index
                this.data_sel = this.rehabilitation_case.rehabilitation_set[index]
            },
            async loadData() {
                let id = this.$route.params.id
                this.rehabilitation_case = await this.$store.dispatch("rehabilitation_case/getRehabilitationCaseById", id)
                this.rehabilitation_set_data()
            },
            rehabilitation_set_data() {
                let data_list = this.rehabilitation_case.rehabilitation_set
                data_list.forEach(element => {
                    let label = ""
                    if (this.rehabilitation_data_render.length === 0) {
                        label = "การฟื้นฟู"
                    }
                    this.rehabilitation_data_render.push({
                        label: label,
                        data: [
                            {
                                key: "แผนการฟื้นฟู",
                                value: element.rehabilitation_plan
                            },
                            {
                                key: "โปรแกรมการฟื้นฟู",
                                value: element.rehabilitation_program
                            },
                            {
                                key: "วันที่เข้ารับการฟื้นฟู",
                                value: element.date_rehabilitation
                            },
                            {
                                key: "ระยะเวลาการฟื้นฟู",
                                value: element.rehabilitation_period
                            },
                            {
                                key: "วันที่ครบกำหนดระยะเวลาการฟื้นฟู",
                                value: element.due_date_rehabilitation_period
                            },
                            {
                                key: "วันที่สิ้นสุดการฟื้นฟู",
                                value: element.rehabilitation_end_date
                            },
                            {
                                key: "ผลการฟื้นฟู",
                                value: element.rehabilitation_effect
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