<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer/>

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="mdi-account-box"
                                            type="text"
                                            v-model="form.username"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock-question"
                                            type="password"
                                            v-model="form.password"
                                            @keypress.13="login"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="primary" @click="login()">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: 'admin',
                    password: 'password'
                }
            }
        },
        methods: {
            login: async function () {
                let data = await this.$store.dispatch('account/login', this.form);
                if (data) {
                    let user = await this.$store.dispatch('account/getUser')
                    if (user.user.groups[0].name === "Volunteer") {
                        await this.$router.push({name: 'Volunteer'})
                    } else {
                        await this.$router.push({name: 'Home'})
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>