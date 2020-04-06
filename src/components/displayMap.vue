<template>
    <div>
        <v-btn @click="getGeolocation">click</v-btn>
        {{`pos : ${pos}`}}
        <p ref="x">x</p>
        <p ref="y">y</p>
        <gmap-map v-if="center"
                  style="width: 100%; height: 400px; margin-top: 0px !important; "
                  :center="center"
                  :zoom="8"
                  class="map-container mt-3">
            <gmap-marker :position="pos" v-if="pos.lat"></gmap-marker>
        </gmap-map>
    </div>

</template>

<script>

    export default {
        name: "displayMap",
        components: {},
        async mounted() {
            this.deviceready_geo()
        },
        data() {
            return {
                pos: null,
                center: null
            }
        },
        methods: {
            deviceready_geo() {
                document.addEventListener("deviceready", this.getGeolocation, false);
            },
            getGeolocation() {
                this.$refs.x.innerHTML = "start"
                let options = {
                    enableHighAccuracy: true,
                };
                if (navigator.geolocation) {

                    this.$refs.x.innerHTML = "e1"
                    navigator.geolocation.getCurrentPosition(this.successLocation, this.errorLocation, options)
                    this.$refs.x.innerHTML = "ee"

                } else {
                    this.$refs.x.innerHTML = "Browser doesn't support Geolocation"
                    console.log("map error :  Browser doesn't support Geolocation")
                    this.$refs.x.innerHTML = "Browser doesn't support Geolocation"
                }
            },
            successLocation(position) {
                this.$refs.y.innerHTML = "success"
                this.$refs.x.innerHTML = position.coords.latitude
                this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.center = this.pos.lat ? this.pos : {lat: 19.1378449, lng: 99.9138361}
            },
            errorLocation(error) {
                this.$refs.y.innerHTML = 'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'
                alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
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