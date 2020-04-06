<template>
  <div>
    <v-form>
      <v-container>
        <v-card>
          <v-card-text>
            <v-col cols="12" >

            <v-text-field
                    v-model="form.username"
                    label="Username"
                    required
                    outlined
                    color="primary"
            >

            </v-text-field>
              <v-text-field
                      v-model="form.first_name"
                      label="ชื่อ"
                      required
                      outlined
              ></v-text-field>

              <v-text-field
                      v-model="form.last_name"
                      label="นามสกุล"
                      required
                      outlined
              ></v-text-field>

              <v-text-field
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      name="input-10-2"
                      label="Password"
                      hint="At least 8 characters"
                      v-model="form.password1"
                      outlined
                      error
                      @click:append="show = !show"
              ></v-text-field>

              <v-text-field
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Verify Password"
                      hint="At least 8 characters"
                      v-model="form.password2"
                      outlined
                      error
                      @click:append="show1 = !show1"
              ></v-text-field>

                <v-text-field
                        v-model="form.phone"
                        label="เบอร์โทร"
                        outlined
                        :rules="[rules.phone.regex]"
                ></v-text-field>
              <district-select
                      :valProvince="form.province"
                      :valAmphur="form.amphur"
                      :valDistrict="form.district"
                      @change="updateDistrictSelect"
                      outlined
              >
              </district-select>
            </v-col>
            <div class="d-flex justify-content-between">

          <v-btn color="error" @click=""> Cancel</v-btn>
          <v-btn color="primary" @click="save"> Submit</v-btn>
            </div>
          </v-card-text>





        </v-card>


      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DistrictSelect from "../../components/share/districtSelect";
export default {
  name: "register",
  components: { DistrictSelect },
  data() {
    return {
      form: {
        province: null,
        amphur: null,
        district: null
      },
      show: false,
      show1: false,
      rules: {
        phone: {
          required: v => !!v || "Required.",
          regex: v => /[0-9]{10}/.test(v) || "Phone must be valid"
        },
        required: value => !!value || "Required.",
        regex: v =>
          /^\w+([.-]?\w+)*@ wer\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
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
      console.log(this.provinces);
    }
  },
  methods: {
    updateDistrictSelect: function(value) {
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
      console.log("UPDATE", this.form);
    },
    save: async function() {
      console.log(this.form);
      let user = await this.$store.dispatch("account/createUser", this.form);
      console.log("save User", this.form);
      if(user){this.$router.go(-1)}
    }
  }
};
</script>

<style scoped></style>
