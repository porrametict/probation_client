<template>
    <div>
        <LoaderOverlay/>
        <v-snackbar
                :timeout="6000"
                :color="'error'"
                :multi-line="true"
                :vertical="true"
                v-model="showError">
            <p>
                ERROR
            </p>
            <ul v-if="Array.isArray(errors)">
                <li v-for="(value,key) in error" :key="key">[ {{key}} ] {{value}}</li>
            </ul>
            <p>
                {{error}}
            </p>
            <v-btn depressed class="white--text error" @click.native="$store.dispatch('error/toggleError',false)">
                Close
            </v-btn>
        </v-snackbar>
        <SuccessSnackbar></SuccessSnackbar>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';
    import LoaderOverlay from '@/components/share/LoaderOverlay'
    import SuccessSnackbar from "./SuccessSnakebar";

    export default {
        name: "Base",
        components: {SuccessSnackbar, LoaderOverlay},
        props: {},
        computed: {
            ...mapGetters({
                error: "error/getError",
                spinnerVisible: "spinner/getVisible",
            }),
            ...mapState({
                showError: state => state.error.showError
            })
        },
        mounted() {
            this.$store.dispatch('error/resetError')
        },
        created() {
        }
    }
</script>