<template>
    <gmap-map v-if="center"
              style="width: 100%; height: 400px; margin-top: 0px !important; "
              :center="center"
              :zoom="8"
              class="map-container mt-3">
        <gmap-marker :position="pos" v-if="pos.lat"></gmap-marker>
    </gmap-map>
</template>

<script>

    export default {
        name: "displayMap",
        components: {},
        async created() {
            this.getGeolocation()
        },
        data() {
            return {
                pos: null,
                center: null
            }
        },
        methods: {
            getGeolocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.successLocation)
                } else {
                    console.log("map error :  Browser doesn't support Geolocation")
                }
            },
            successLocation(position) {
                this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.center = this.pos.lat ? this.pos : {lat: 19.1378449, lng: 99.9138361}
            }
        }
    }
</script>

<style scoped>
    .photolayout {
        background-color: #607D8B;
    }

    .photolayoutSmall {
        background-color: #607D8B;
    }

    .textcolor {
        color: #0277BD;
    }

    .head {
        border-top: 0.5px solid;
        margin-top: 1px;
        padding: 10px;
    }

    .btnedit {
        background-color: #FF7F41 !important;
        color: white;
    }
</style>