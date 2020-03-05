<template>
  <div class="home">
<!--    <AfterProbationForm/>-->
    <DuringProbationForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import AfterProbationForm from "@/components/AfterProbationForm";
import DuringProbationForm from "../components/DuringProbationForm";

export default {
  name: 'Home',
  components: {
    DuringProbationForm,
    AfterProbationForm,
  }
}
</script>
