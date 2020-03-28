<template>
  <div class="home">
      <v-container>
          <h1>Hello Home</h1>
          <district-select></district-select>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import districtSelect from "../components/share/districtSelect";
export default {
  name: 'Home',
  components: {
      districtSelect
  }
}
</script>
