<template>
  <v-app-bar  absolute app color="transparent" flat height="50">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer">
      <v-icon>
        mdi-dots-vertical
      </v-icon>
    </v-btn>
     <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import { mapMutations} from "vuex";
export default {
  name: "CoreAppBar",
  methods: {
    ...mapMutations({
      setDrawer: "toggle"
    })
  }
};
</script>

<style scoped></style>
