<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="form.username"
              label="Username"
              required
              solo
              color="primary"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.first_name"
              label="ชื่อ"
              required
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.last_name"
              label="นามสกุล"
              required
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.emailMatch]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 8 characters"
              v-model="form.password1"
              solo
              error
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.emailMatch]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-2"
              label="Verify Password"
              hint="At least 8 characters"
              v-model="form.password2"
              solo
              error
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.phone"
              label="เบอร์โทร"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <district-select :valProvince="form.user_province"
                         :valAmphur="form.user_amphur"
                         :valDistrict="form.user_district"
                         @change="updateDistrictSelect">

        </district-select>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import districtSelect from "../../store/modules/districtSelect";
import DistrictSelect from "../../components/share/districtSelect";
export default {
  name: "register",
  components: {DistrictSelect},
  data() {
    return {
      form: {
        user_province: null,
        user_amphur : null,
        user_district : null,
        roles: []
      },
      show: false,
      show1: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  computed: {
    ...mapState({
      provinces: state => state.districtSelect.provinces
    })
  },
  async mounted() {
    if (!this.provinces) {
      await this.$store.dispatch("districtSelect/getProvinces");
      console.log(this.provinces)
    }
  },
  methods: {
    updateDistrictSelect: function (value) {
      this.form.province = value[0];
      this.form.amphur = value[1];
      this.form.district = value[2];
      if (value[0]) {
        this.form.province = value[0].id;
      }
      if (value[1]) {
        this.form.amphur = value[1].id;
      }
      if (value[2]) {
        this.form.district = value[2].id;
      }
      console.log("UPDATE",this.form)
    },
    save: async function () {
      console.log(this.form);
      // let user = await this.$store.dispatch("admin/users/createUser", this.form);
      // console.log("save User", this.form);
      // if(user){this.$router.go(-1)}
    }
  }
};
</script>

<style scoped></style>
