<template>
    <v-container>
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       สร้างการจำเเนก
                    </span>
            </p>
        </div>

        <v-card>
            <v-card-text>
                <div>
                    <v-text-field
                            label="ครั้งที่จำเเนก"
                            outlined
                            type="number"
                            v-model="form.classification_time"
                            :error="!!error.classification_time"
                            :error-messages="error.classification_time"
                    >
                    </v-text-field>
                    <v-text-field
                            label="วันที่จำเเนก"
                            outlined
                            v-model="form.classification_date"
                            :error="!!error.classification_date"
                            :error-messages="error.classification_date"
                            type="date"
                    >
                    </v-text-field>
                    <v-text-field
                            label="ระดับการควบคุม"
                            outlined
                            v-model="form.control_level"
                            :error="!!error.control_level"
                            :error-messages="error.control_level"
                    >
                    </v-text-field>
                    <v-text-field
                            label="ความเสี่ยง"
                            outlined
                            v-model="form.rick"
                            :error="!!error.rick"
                            :error-messages="error.rick"
                    >
                    </v-text-field>
                </div>
                <div class="d-flex justify-content-between">
                    <v-btn color="grey"
                           class="white--text"
                           large
                           @click="$router.go(-1)"
                    >
                        ยกเลิก
                    </v-btn>
                    <v-btn color="primary" class="ma-2" @click="save">
                        บันทึก
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";

    export default {
        extends: Base,
        name: "createClassification",
        data: () => ({
            form: {},
            probation_case: null,

        }),
        async created() {
        }, methods: {
            async save() {
                this.form.probation_case = this.$route.params.id
                if (await this.$store.dispatch('probation_case/createClassification', this.form)) {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>

</style>