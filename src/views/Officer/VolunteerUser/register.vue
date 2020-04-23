<template>
    <div>
        <v-form>
            <v-container>
                <div>
                    <p class="title">
                        <v-icon>
                            mdi-circle
                        </v-icon>
                        <span class="">
                       เพิ่ม อสค.
                    </span>
                    </p>
                    <v-spacer></v-spacer>
                </div>
                <v-card>
                    <v-card-text>
                        <v-col cols="12">
                            <v-text-field
                                    v-model="form.username"
                                    label="Username"
                                    required
                                    outlined
                                    color="primary"
                                    :error="!!error.username"
                                    :error-messages="error.username"
                            >
                            </v-text-field>
                            <v-text-field
                                    v-model="form.first_name"
                                    label="ชื่อ"
                                    required
                                    outlined
                                    :error="!!error.first_name"
                                    :error-messages="error.first_name"
                            ></v-text-field>

                            <v-text-field
                                    v-model="form.last_name"
                                    label="นามสกุล"
                                    required
                                    outlined
                                    :error="!!error.last_name"
                                    :error-messages="error.last_name"
                            ></v-text-field>

                            <v-text-field
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Password"
                                    hint="At least 8 characters"
                                    v-model="form.password1"
                                    outlined
                                    :error="!!error.password1"
                                    :error-messages="error.password1"
                                    @click:append="show = !show"
                            ></v-text-field>

                            <v-text-field
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Verify Password"
                                    hint="At least 8 characters"
                                    v-model="form.password2"
                                    outlined
                                    :error="!!error.password2"
                                    :error-messages="error.password2"
                                    @click:append="show1 = !show1"
                            ></v-text-field>

                            <v-text-field
                                    v-model="form.phone"
                                    label="เบอร์โทร"
                                    placeholder="00-00000000"
                                    outlined
                                    :error="!!error.phone"
                                    :error-messages="error.phone"
                                    :rules="[rules.phone.regex]"
                            ></v-text-field>
                            <district-select
                                    :val-province="form.province"
                                    :val-amphur="form.amphure"
                                    :val-district="form.district"
                                    @change="updateDistrictSelect"
                                    outlined
                            >
                            </district-select>
                        </v-col>
                        <div class="d-flex justify-content-between">
                            <v-btn color="grey" class="white--text" @click="$router.go(-1)"> Cancel</v-btn>
                            <v-btn color="primary" @click="save"> Submit</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import DistrictSelect from "../../../components/share/districtSelect";
    import Base from "@/components/share/Base"


    export default {
        name: "register",
        extends: Base,
        components: {DistrictSelect},
        data() {
            return {
                form: {
                    province: null,
                    amphure: null,
                    district: null
                },
                show: false,
                show1: false,
                rules: {
                    phone: {
                        required: v => !!v || "Required.",
                        regex: v => /[0-9]{10}/.test(v) || "Phone must be valid"
                    },
                    required: value => !!value || "Required.",
                    regex: v =>
                        /^\w+([.-]?\w+)*@ wer\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "E-mail must be valid"
                }
            };
        },
        computed: {
            ...mapState({
                provinces: state => state.districtSelect.provinces
            })
        },
        async mounted() {
            if (!this.provinces) {
                await this.$store.dispatch("districtSelect/getProvinces");
            }
        },
        methods: {
            updateDistrictSelect: function (value) {
                this.form.province = value[0]
                this.form.amphure = value[1]
                this.form.district = value[2]
                if(value[0]) {
                    this.form.province = value[0].id
                }
                if(value[1]) {
                    this.form.amphure = value[1].id
                }
                if(value[2]) {
                    this.form.district = value[2].id
                }
            },
            save: async function () {
                this.form.user_type = 1
                console.log(this.form,"form")
                let user = await this.$store.dispatch("account/createUser", this.form);
                if (user) {
                    this.$router.go(-1)
                }
            }
        }
    };
</script>

<style scoped></style>
