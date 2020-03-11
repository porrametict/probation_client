<template>
    <div id="app">
        <v-app>
            <router-view/>
        </v-app>
    </div>
</template>

<script>
import DuringProbationForm from "./views/Volunteer/Assignment/Form/DuringProbationForm";
import AfterProbationForm from "./views/Volunteer/Assignment/Form/AfterProbationForm";

export default {
  name: 'App',

  components: {
    AfterProbationForm,
    DuringProbationForm,
  },

  data: () => ({
    //
  }),
};
</script>
