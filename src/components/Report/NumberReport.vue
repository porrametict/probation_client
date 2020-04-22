<template>
    <div>
        <v-card>
            <v-card-title>
                {{label}}
            </v-card-title>
            <v-divider class="pa-0 ma-0"></v-divider>
                <div class="d-flex ">
                    <v-card
                            class="flex-grow-1 text-end"
                            v-for="(d,index) in data.values" :key="index"
                            tile
                    >
                        <v-card-text class="d-flex flex-column">
                        <span class="title " >
                            {{data.labels[index]}}
                        </span>
                            <span class="display-2 " :class="`${data.value_color[index]}`" >
                            {{data.values[index]}}
                        </span>
                        </v-card-text>
                    </v-card>
                </div>
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
            data: {
                type: Object
            }
        },
        name: "TwoLineReport",
        data: () => ({})
        , mounted() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>