<template>
    <div>
        <v-card v-if="data[0]" color="primary" dark>
            <v-card-title>
                 {{label}}
            </v-card-title>
            <v-divider class="pa-0 ma-0"></v-divider>
            <v-card-text class="overflow-x-auto text-end " >
                <div class="white--text">
                    <div class="display-2">
                        <span>
                            {{labels[0]}}
                        </span>

                        <span>
                            {{values[0]}}
                        </span>
                    </div>
                    <div class="title">
                        <span>
                            {{labels[1]}}
                        </span>

                        <span>
                            {{values[1]}}
                        </span>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

    export default {
        props: {
            label: {
                type: String,
                default: ""
            },
            values: {
                type: Array,
                required: true
            },
            labels: {
                type: Array,
                required: true
            }
        },
        name: "TwoLineReport",
        data: () => ({
            data: [{
                values: null,
                labels: null,
            }]

        })
        , mounted() {
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>