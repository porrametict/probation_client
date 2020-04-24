<template>
    <div>
        <v-container>
            <v-card>
                <v-container>

                    <v-form v-model="valid">
                        <v-row>
                            <v-col
                                    cols="12"
                                    md="4"
                            >
                                <v-text-field
                                        :counter="10"
                                        :rules="[rules.nameRules.regex]"
                                        label="First name"
                                        required
                                        v-model="form.firstname"
                                        outlined
                                ></v-text-field>
                            </v-col>

                            <v-col
                                    cols="12"
                                    md="4"
                            >
                                <v-text-field
                                        :counter="10"
                                        :rules="[rules.nameRules.regex]"
                                        label="Last name"
                                        required
                                        v-model="form.lastname"
                                        outlined
                                ></v-text-field>
                            </v-col>

                            <v-col
                                    cols="12"
                                    md="4"
                            >
                                <v-text-field
                                        :rules="[rules.emailRules.regex]"
                                        label="E-mail"
                                        required
                                        v-model="form.email"
                                        placeholder="example@email.com"
                                        outlined
                                ></v-text-field>
                            </v-col>
                            <!--                <v-col cols="12 ">-->
                            <!--                    -->
                            <!--                <v-text-field-->
                            <!--                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"-->
                            <!--                                    :type="show ? 'text' : 'password'"-->
                            <!--                                    name="input-10-2"-->
                            <!--                                    label="Password"-->
                            <!--                                    hint="At least 8 characters"-->
                            <!--                                    v-model="form.password1"-->
                            <!--                                    outlined-->
                            <!--                                    :error="error.password1"-->
                            <!--                                    :error-messages="error.password1"-->
                            <!--                                    @click:append="show = !show"-->
                            <!--                            ></v-text-field>-->

                            <!--                            <v-text-field-->
                            <!--                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"-->
                            <!--                                    :type="show1 ? 'text' : 'password'"-->
                            <!--                                    name="input-10-2"-->
                            <!--                                    label="Verify Password"-->
                            <!--                                    hint="At least 8 characters"-->
                            <!--                                    v-model="form.password2"-->
                            <!--                                    outlined-->
                            <!--                                    :error="error.password2"-->
                            <!--                                    :error-messages="error.password2"-->
                            <!--                                    @click:append="show1 = !show1"-->
                            <!--                            ></v-text-field>-->

                            <!--                            <v-text-field-->
                            <!--                                    v-model="form.phone"-->
                            <!--                                    label="เบอร์โทร"-->
                            <!--                                    placeholder="00-00000000"-->
                            <!--                                    outlined-->
                            <!--                                    :error="error.phone"-->
                            <!--                                    :error-messages="error.phone"-->
                            <!--                                    :rules="[rules.phone.regex]"-->
                            <!--                            ></v-text-field>-->
                            <!--                </v-col>-->
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="date"
                                                label="Birthday date"
                                                prepend-inner-icon="mdi-calendar"
                                                readonly
                                                outlined
                                                v-on="on"
                                        >

                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                            locale="th"
                                            ref="picker"
                                            v-model="date"
                                            :max="new Date().toISOString().substr(0, 10)"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>



                        </v-row>
                            <v-text-field
                                        v-model="form.phone"
                                        label="เบอร์โทร"
                                        placeholder="00-00000000"
                                        outlined
                                        :rules="[rules.phone.regex]"
                                ></v-text-field>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>

</template>

<script>
    export default {
        name: "TextInput",
        data: () => ({
            valid: false,
            date: null,
            menu: false,
            form: {
                email: '',
                firstname: '',
                lastname: '',
            },
            rules: {
                phone: {
                    required: v => !!v || "Required.",
                    regex: v => /[0-9]{10}/.test(v) || "Phone must be valid"
                },
                nameRules: {
                    required: v => !!v || 'Name is required',
                    regex: v => v.length <= 10 || 'Name must be less than 10 characters',
                },
                emailRules: {
                    required: v => !!v || 'E-mail is required',
                    regex: v => /.+@.+/.test(v) || 'E-mail must be valid',
                },
            },
        }),
        watch: {
            menu(val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            },
        },
        methods: {
            save(date) {
                this.$refs.menu.save(date)
            },
        },
    }
</script>

<style scoped>

</style>