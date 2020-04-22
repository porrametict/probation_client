<template>
    <v-container v-if="offender">
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       เเก้ไขผู้ถูกคุม
                    </span>
            </p>
        </div>

        <v-card>
            <v-card-text>
                <div>
                    <div>
                        <v-text-field
                                label="ชื่อ"
                                outlined
                                v-model="offender.o_first_name"
                                :error="!!error.o_first_name"
                                :error-messages="error.o_first_name"
                        >
                        </v-text-field>
                        <v-text-field
                                label="นามสุกล"
                                outlined
                                v-model="offender.o_last_name"
                                :error="!!error.o_last_name"
                                :error-messages="error.o_last_name"
                        >
                        </v-text-field>
                        <v-text-field
                                label="อายุ"
                                outlined
                                v-model="offender.o_age"
                                :error="!!error.o_age"
                                :error-messages="error.o_age"
                        >
                        </v-text-field>
                        <v-text-field
                                label="เชื้อชาติ"
                                outlined
                                v-model="offender.o_race"
                                :error="!!error.o_race"
                                :error-messages="error.o_race"
                        >
                        </v-text-field>
                        <v-text-field
                                label="สัญชาติ"
                                outlined
                                v-model="offender.o_nationality"
                                :error="!!error.o_nationality"
                                :error-messages="error.o_nationality"
                        >
                        </v-text-field>
                        <v-text-field
                                label="การศึกษา"
                                outlined
                                v-model="offender.o_education"
                                :error="!!error.o_education"
                                :error-messages="error.o_education"
                        >
                        </v-text-field>
                        <v-text-field
                                label="ศาสนา"
                                outlined
                                v-model="offender.o_religion"
                                :error="!!error.o_religion"
                                :error-messages="error.o_religion"
                        >
                        </v-text-field>
                        <v-text-field
                                label="สถานภาพ"
                                outlined
                                v-model="offender.o_marital_status"
                                :error="!!error.o_marital_status"
                                :error-messages="error.o_marital_status"
                        >
                        </v-text-field>
                    </div>
                    <div class="py-1 d-flex flex-column flex-md-row justify-space-between">
                        <v-btn class="white--text my-2" large color="grey" @click="$router.go(-1)">กลับ</v-btn>
                        <v-btn class="white--text my-2 " large color="success" @click="updateUser">บันทึก</v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import DistrictSelect from "../../../components/share/districtSelect";
    import Base from "../../../components/share/Base";

    export default {
        extends: Base,
        name: "editOffender",
        components: {DistrictSelect},
        data: () => ({
            offender: null,
        }),
        async created() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.offender = await this.$store.dispatch('offender/getUserDetail', this.$route.params.id)
            }, async updateUser() {
                let data = await this.$store.dispatch('offender/updateUser', this.offender)
            },
            updateDistrictSelect: function (value) {
                this.offender.province = value[0]
                this.offender.amphure = value[1]
                this.offender.district = value[2]
                if (value[0]) {
                    this.offender.province = value[0].id
                }
                if (value[1]) {
                    this.offender.amphure = value[1].id
                }
                if (value[2]) {
                    this.offender.district = value[2].id
                }
            },

        },
    }
</script>

<style scoped>

</style>