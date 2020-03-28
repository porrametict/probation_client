<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row class="d-flex justify-center flex-column flex-md-row align-md-center ma-3 ma-md-0">
                    <div class="mx-md-12">
                    <v-row class="d-flex justify-center flex-column align-center">
                        <v-icon class="display-4" color="p_primary">
                            mdi-owl
                        </v-icon>
                        <p class="deep-purple--text title ma-0">PROBATION</p>
                    </v-row>
                    </div>
                    <div class="mx-md-12">
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
                        <v-btn color="p_primary" class="white--text" @click="login()" block large>Login</v-btn>
                    </div>
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
                    username: 'volunteer',
                    password: 'v_password'
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


