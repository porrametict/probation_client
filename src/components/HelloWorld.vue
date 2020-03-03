<template>
  <div>
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import probation_form  from '@/assets/probation_form'
var Survey = SurveyVue.Survey;

export default {
  name: "HelloWorld",
  components: {
    Survey
  },
  props: {
    msg: String
  },
  data() {
    //Define Survey JSON
    //Here is the simplest Survey with one text question
    

    //Create the model and pass it into VueSJ Survey component
    var model = new SurveyVue.Model(probation_form);
    //You may set model properties
    //model.mode = "display";

    return {
      survey: model
    };
  }
};
</script>

</style>
