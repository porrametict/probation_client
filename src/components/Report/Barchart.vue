<template>
    <div>
        <v-card>
            <v-card-title>
                <slot name="header">
                    แผนภูมิเเท่ง {{label}}
                </slot>
            </v-card-title>
            <v-divider class="pa-0 ma-0"></v-divider>
            <v-card-text class="overflow-x-auto">
                <div ref="chart">
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import Plotly from 'plotly.js-dist'

    export default {
        props: {
            horizontal: {
                type: Boolean,
                default: false
            },
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
        name: "BarChart",
        data: () => ({
            layout: {
                height: 400,
                width: 500
            },
            data: [{
                x: null,
                y: null,
                type: 'bar'
            }]

        })
        , mounted() {
            this.createChart()
        },
        methods: {
            createChart() {

                this.data[0].y = this.values
                this.data[0].x = this.labels
                let chart = this.$refs.chart;
                if (this.horizontal) {
                    this.data[0].x = this.values
                    this.data[0].y = this.labels
                    this.data[0].orientation = 'h'
                    this.data[0].transforms = [{
                        type: 'sort',
                        target: 'y',
                        order: 'descending'
                    }]
                }
                Plotly.newPlot(chart, this.data);
            },
        }
    }
</script>

<style scoped>

</style>