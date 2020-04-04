<template>
    <gmap-map
            style="width: 100%; height: 400px; margin-top: 0px !important; "
            :center="getFarmLatLng"
            :zoom="8"
            class="map-container mt-3">
        <gmap-marker :position="getFarmLatLng"></gmap-marker>
    </gmap-map>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "displayMap",
        components: {},
        computed: {
            ...mapState({}),
            ...mapGetters({}),
            getFarmLatLng() {
                let lat = 0
                let lng = 0
                let result = {
                    lat: lat,
                    lng: lng
                }
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        result = pos
                        lat = position.coords.latitude
                        lng = position.coords.longitude
                    }, function () {
                        console.log("error map")
                    });
                } else {
                    // Browser doesn't support Geolocation
                    console.log("map error ")
                }
                return result
            },

        },
        async created() {
        }
        ,
        data() {
            return {}
        }
        ,
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