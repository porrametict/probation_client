import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes : {
            light : {
                success : colors.green.darken1,
                danger : colors.red.darken2
            }
        }

    }
});
