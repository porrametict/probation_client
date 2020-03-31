<template>
    <div>
        <v-card class="ma-3" :color="color">
            <v-card-text>
                <slot name="header">
                </slot>
                <div v-for="(obj,o_index) in data" ::key="o_index">
                    <p class="white--text mt-1">{{obj.label}}</p>
                    <div class="d-flex flex-row" v-for="(d,d_index) in obj.data" :key="d_index">
                        <v-card outlined tile class="flex-grow-1 flex-shrink-1" max-width="200" min-width="200">
                            <v-card-text class="pa-2">
                                {{d.key}}
                            </v-card-text>
                        </v-card>
                        <v-card outlined tile class="flex-grow-1 flex-shrink-1">
                            <v-card-text class="pa-2 text--primary"
                                         v-text="d.value">
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "DataListRender",
        props: {
            color: {
                type: String,
                default: "primary"
            },
            data: {
                type: Array,
                default: null
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>