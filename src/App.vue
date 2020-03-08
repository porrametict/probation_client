<template>
    <div id="app">
        <router-view/>
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
