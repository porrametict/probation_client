<template>
  <div class="home">
      <v-container>
          <h1>Hello Home</h1>
          <district-select></district-select>
          <ExcelProbationCase></ExcelProbationCase>
          <ExcelRehabilitationCase></ExcelRehabilitationCase>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import districtSelect from "../components/share/districtSelect";
import ExcelProbationCase from "./Officer/ProbationCase/ExcelProbationCase";
import ExcelRehabilitationCase from "./Officer/RehabilitationCase/ExcelRehabilitationCase";
export default {
  name: 'Home',
  components: {
      ExcelRehabilitationCase,
      districtSelect,
      ExcelProbationCase,
  }
}
</script>
