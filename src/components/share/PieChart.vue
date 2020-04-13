<template>
    <div>
        <v-card>
            <v-card-title>
                แผนภูมิวงกลม {{label}}
            </v-card-title>
            <v-divider class="pa-0 ma-0"></v-divider>
            <v-card-text class="overflow-x-auto">
                <div ref="myDiv" id="myDiv"></div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import Plotly from 'plotly.js-dist'

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
        name: "PieChart",
        data: () => ({
            layout: {
                height: 400,
                width: 500
            },
            data: [{
                values: null,
                labels: null,
                type: 'pie'
            }]

        })
        , mounted() {
            this.createChart()
        },
        methods: {
            createChart() {
                this.data[0].values = this.values
                this.data[0].labels = this.labels
                Plotly.newPlot('myDiv', this.data);
                // Plotly.newPlot('myDiv', this.data,this.layout);
            }
        }
    }
</script>

<style scoped>

</style>