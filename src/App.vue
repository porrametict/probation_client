<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import DuringProbationForm from "./components/DuringProbationForm";


export default {
  name: 'App',

  components: {
    DuringProbationForm,
  },

  data: () => ({
    //
  }),
};
</script>
