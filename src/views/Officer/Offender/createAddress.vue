<template>
    <v-container>
        <div>
            <div>
                <p class="title">
                    <v-icon>
                        mdi-circle
                    </v-icon>
                    <span class="">
                       เพิ่มที่อยู่
                    </span>
                </p>
            </div>

            <v-card>
                <v-card-text>
                    <v-text-field
                            label="บ้านเลขที่"
                            outlined
                            v-model="form.o_address_house"
                            :error="!!error.o_address_house"
                            :error-messages="error.o_address_house"
                    >
                    </v-text-field>
                    <v-text-field
                            label="หมู่บ้าน/ชุมชน"
                            outlined
                            v-model="form.o_address_village"
                            :error="!!error.o_address_village"
                            :error-messages="error.o_address_village"
                    >
                    </v-text-field>
                    <v-text-field
                            label="หมู่ที่"
                            outlined
                            v-model="form.o_address_mu"
                            :error="!!error.o_address_mu"
                            :error-messages="error.o_address_mu"
                    >
                    </v-text-field>
                    <v-text-field
                            label="ชอย"
                            outlined
                            v-model="form.o_address_alley"
                            :error="!!error.o_address_alley"
                            :error-messages="error.o_address_alley"
                    >
                    </v-text-field>
                    <v-text-field
                            label="ถนน"
                            outlined
                            v-model="form.o_address_street"
                            :error="!!error.o_address_street"
                            :error-messages="error.o_address_street"
                    >

                    </v-text-field>
                    <v-text-field
                            label="รหัสไปรษณีย์"
                            outlined
                            v-model="form.o_address_zip_code"
                            :error="!!error.o_address_zip_code"
                            :error-messages="error.o_address_zip_code"
                    >

                    </v-text-field>
                    <district-select
                            outlined
                            :val-amphur="form.o_address_amphure"
                            :val-district="form.o_address_district"
                            :val-province="form.o_address_province"
                            @change="updateDistrictSelect"
                    >
                    </district-select>
                    <v-select
                            label="สถานะที่อยู่"
                            outlined
                            v-model="form.o_address_status"
                            item-text="name"
                            item-value="key"

                            :items="[
                                    {
                                        key : true,
                                       name : 'ที่อยู่ปัจจุบัน'
                                    },
                                    {
                                    key : false,
                                    name : 'ที่อยู่เก่า'
                                    }
                                ]">

                    </v-select>
                    <div class="py-1 d-flex flex-column flex-md-row justify-space-between">
                        <v-btn class="white--text my-2" large color="grey" @click="$router.go(-1)">กลับ</v-btn>
                        <v-btn color="primary" class="ma-2" @click="save">
                            บันทึก
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";
    import DistrictSelect from "../../../components/share/districtSelect";

    export default {
        components: {DistrictSelect},
        extends: Base,

        name: "createAddress",
        data: () => ({
            form: {}
        }),
        methods: {
            updateDistrictSelect: function (value) {
                this.form.o_address_province = value[0]
                this.form.o_address_amphure = value[1]
                this.form.o_address_district = value[2]
                if (value[0]) {
                    this.form.o_address_province = value[0].id
                }
                if (value[1]) {
                    this.form.o_address_amphure = value[1].id
                }
                if (value[2]) {
                    this.form.o_address_district = value[2].id
                }
            },
            save: async function () {
                this.form.offender = this.$route.params.id
                console.log("catr", this.form)
                let result = await this.$store.dispatch("offender/createAddress", this.form);
                if (result != null) {
                    this.$router.go(-1)
                }

            }
        }
    }
</script>

<style scoped>

</style>