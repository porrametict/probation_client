<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>
      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
export default {
  name: "CoreAppBar",
  computed: {
    ...mapState(
            {
              drawer: state => state.drawer.drawer           }
    ),
  },

  methods: {
    ...mapMutations({
      setDrawer : 'SET_DRAWER',
    }),
  },
};
</script>

<style scoped></style>
