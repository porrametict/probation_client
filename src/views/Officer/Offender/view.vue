<template xmlns:template="http://www.w3.org/1999/html">
    <v-container v-if="offender">
        <div>
            <p class="title">รายละเอียด</p>
        </div>
        <!--            main-->
        <div>
            <!--                offender-->
            <data-list-render :data="offender_data_render">
                <template v-slot:header>
                    <div class="d-flex justify-content-between">
                        <div>

                        <div class="white--text">ผู้กระทำผิด</div>
                        <div class="title white--text mb-2">
                            <p class="ma-0">
                                {{offender.o_personal_id}}
                            </p>
                            <p class="ma-0">
                                {{offender.o_first_name + " "
                                +offender.o_last_name}}
                            </p>
                        </div>
                        </div>
                        <div>
                            <v-btn icon outlined color="white" @click="$router.push({name:'editOffender',params:{id:$route.params.id}})">
                                <v-icon color="white">
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                </template>
            </data-list-render>
            <data-list-render :data="offender_address_render" color="pink">
                <template v-slot:header>
                    <div class="d-flex justify-content-between">
                        <div class="white--text">ที่อยู่ผู้กระทำผิด</div>
                        <div>
                            <v-btn icon outlined color="white" @click="$router.push({name:'editOffenderAddress',params:{id:$route.params.id}})">
                                <v-icon color="white">
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                </template>

            </data-list-render>
        </div>
    </v-container>
</template>

<script>
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        name: "OffenderView",
        components: {DataListRender},
        data() {
            return {
                offender: null,
                offender_data_render: null,
                offender_address_render: []
            }
        }, async created() {
            await this.loadData()
        }, methods: {
            async loadData() {
                this.offender = await this.$store.dispatch('offender/getUserDetail', this.$route.params.id)
                this.data_preparing()
            },
            data_preparing() {
                this.address_preparing()
                this.offender_data_render = [
                    {
                        label: "ข้อมูลพื้นฐาน",
                        data: [
                            {
                                key: "อายุ",
                                value: this.offender.o_age
                            }, {
                                key: "เชื้อชาติ",
                                value: this.offender.o_race
                            }, {
                                key: "สัญชาติ",
                                value: this.offender.o_nationality
                            }, {
                                key: "การศึกษา",
                                value: this.offender.o_education
                            }, {
                                key: "อาชีพ",
                                value: this.offender.o_career
                            }, {
                                key: "ศาสนา",
                                value: this.offender.o_religion
                            }, {
                                key: "สถานภาพ",
                                value: this.offender.o_marital_status
                            },
                        ]
                    }
                ];
            },
            address_preparing() {
                let data_list = this.offender.offenderaddress_set.reverse()
                data_list.forEach(element => {
                    let label = ""
                    if (this.offender_address_render.length === 0) {
                        label = "ที่อยู่"
                    }
                    this.offender_address_render.push({
                        label: label,
                        data: [
                            {
                                key: "บ้านเลขที่",
                                value: element.o_address_house
                            },
                            {
                                key: "หมู่บ้าน/ชุมชน",
                                value: element.o_address_village
                            },
                            {
                                key: "หมู่ที่",
                                value: element.o_address_mu
                            },
                            {
                                key: "ซอย",
                                value: element.o_address_alley
                            },
                            {
                                key: "ถนน",
                                value: element.o_address_street
                            },
                            {
                                key: "ตำบล",
                                value: element.district ? element.district.name_th : null
                            },

                            {
                                key: "อำเถอ",
                                value: element.amphure ? element.amphure.name_th : null
                            },
                            {
                                key: "จังหวัด",
                                value: element.province ? element.province.name_th : null
                            },
                            {
                                key: "รหัสไปรษณีย์",
                                value: element.o_address_zip_code
                            },
                            {
                                key: "สถานะ",
                                value: element.o_address_status  ===  true ? 'ที่อยู่ปัจจุบัน' : 'ที่อยู่เก่า'
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