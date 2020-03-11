<template>
    <div id="app">
        <v-app>
            <router-view/>
        </v-app>
    </div>
</template>

<script>
import DuringProbationForm from "./components/DuringProbationForm";
import AfterProbationForm from "./components/AfterProbationForm";

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
