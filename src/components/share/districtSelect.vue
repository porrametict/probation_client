<template>
    <div v-if="provinces">
        <v-select :items="provinces"
                  :outlined="outlined"
                  hide-details
                  item-text="name_th" label="จังหวัด"
                  v-model="selProvince"
                  return-object
                  @change="provinceChange"
                  class="my-2"
                  :error-messages="error.province"
        >
        </v-select>
        <v-select :items="amphurs"
                  :outlined="outlined"
                  hide-details
                  return-object
                  item-text="name_th" label="อำเภอ"
                  v-model="selAmphur"
                  @change="amphurChange"
                  class="my-2"
                  :error-messages="error.amphure"
        >
        </v-select>
        <v-select :items="districts"
                  :outlined="outlined"
                  hide-details
                  return-object
                  v-model="selDistrict"
                  item-text="name_th" label="ตำบล"
                  @change="districtChange"
                  class="my-2"
                  :error-messages="error.district"
        >
        </v-select>
    </div>

</template>
<script>
    import Base from "./Base";

    let defaultProvince = {
        id: 0,
        name_th: "กรุณาเลือก",
    };
    let defaultAmphur = {
        id: 0,
        name_th: "กรุณาเลือก"
    };
    let defaultDistrict = {
        id: 0,
        name_th: "กรุณาเลือก"
    };
    export default {
        extends: Base,
        props: {
            outlined: {
                type: Boolean,
                default: false
            },
            valProvince: {
                type: Number,
                default: 0
            },
            valAmphur: {
                type: Number,
                default: 0
            },
            valDistrict: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            provinces: [defaultProvince],
            amphurs: [defaultAmphur],
            districts: [defaultDistrict],
            selProvince: defaultProvince,
            selAmphur: defaultAmphur,
            selDistrict: defaultDistrict,
        }),
        async created() {
            let provinces = await this.$store.dispatch('districtSelect/getProvinces');
            this.provinces = [defaultProvince].concat(provinces);
            if (this.valProvince && this.valProvince != 0) {
                this.sync()
            }
        },
        methods: {
            sync: function () {
                this.provinces.forEach((p) => {
                    if (p.id == this.valProvince) {
                        this.selProvince = p;
                        this.provinceChange(p);
                    }
                });
                this.amphurs.forEach((a) => {
                    if (a.id == this.valAmphur) {
                        this.selAmphur = a;
                        this.amphurChange(a);
                    }
                });
                this.districts.forEach((d) => {
                    if (d.id == this.valDistrict) {
                        this.selDistrict = d;
                        this.districtChange(d);
                    }
                });
            },
            provinceChange: function (ev) {
                if (ev.amphures_set) {
                    this.amphurs = [defaultAmphur].concat(ev.amphures_set)
                } else {
                    this.amphurs = [defaultAmphur];
                }
                this.selAmphur = defaultAmphur
                this.selDistrict = defaultDistrict
                if (!ev.id) {
                    ev = null
                }
                this.$emit('change', [ev, null, null])
            },
            amphurChange: function (ev) {
                if (ev.districts_set) {
                    this.districts = [defaultDistrict].concat(ev.districts_set)
                } else {
                    this.districts = [defaultDistrict];
                }
                this.selDistrict = defaultDistrict
                if (!ev.id) {
                    ev = null
                }
                this.$emit('change', [this.selProvince, ev, null])
            },
            districtChange: function (ev) {
                if (!ev.id) {
                    ev = null
                }
                this.$emit('change', [this.selProvince, this.selAmphur, ev])
            }
        }
    }
</script>