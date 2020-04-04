<template>
    <div>
        <div v-if="pos">
            <p class="title">แผนที่</p>
            <gmap-map v-if="center"
                      style="width: 100%; height: 400px; margin-top: 0px !important; "
                      :center="center"
                      :zoom="15"
                      class="map-container mt-3">
                <gmap-marker :position="pos" v-if="pos.lat"></gmap-marker>
            </gmap-map>
        </div>
    </div>
</template>
<script>
    export default {
        name: "MapFormDisplay",
        props: {
            assignment: {
                type: Object
            }
        },
        data() {
            return {
                pos: null,
                center: null
            }
        },
        created() {
            if (this.assignment.form_type === 1 && this.assignment.during_probation_form_data) {
                this.setPos(this.assignment.during_probation_form_data)
            } else if (this.assignment.form_type === 2 && this.assignment.after_probation_form_data) {
                this.setPos(this.assignment.after_probation_form_data)
            }
        }, methods: {
            setPos(data) {
                if (data.map_lat && data.map_lng) {
                    this.pos = {
                        lat: Number(data.map_lat),
                        lng: Number(data.map_lng)
                    };
                }

                this.center = this.pos ? this.pos : {lat: 19.1378449, lng: 99.9138361}
            }
        }
    }
</script>

<style scoped>

</style>