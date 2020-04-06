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
        >
            <!--             :error-messages="error.house_province"-->
        </v-select>
        <v-select :items="amphurs"
                  :outlined="outlined"
                  hide-details
                  return-object
                  item-text="name_th" label="อำเภอ"
                  v-model="selAmphur"
                  @change="amphurChange"
                  class="my-2"
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

        >
        </v-select>
    </div>

</template>
<script>
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
        props: {
            outlined: {
                type: Boolean,
                default: false
            },
            valProvince: {
                type: Object,
                default: 0
            },
            valAmphur: {
                type: Object,
                default: 0
            },
            valDistrict: {
                type: Object,
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
            if ( this.valProvince && this.valProvince.id != 0) {
                this.sync()
            }
        },
        methods: {
            sync: function () {
                this.provinces.forEach((p) => {
                    if (p.id == this.valProvince.id) {
                        this.selProvince = p;
                        this.provinceChange(p);
                    }
                });
                this.amphurs.forEach((a) => {
                    if (a.id == this.valAmphur.id) {
                        this.selAmphur = a;
                        this.amphurChange(a);
                    }
                });
                this.districts.forEach((d) => {
                    if (d.id == this.valDistrict.id) {
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
                this.$emit('change', [ev, null, null])
            },
            amphurChange: function (ev) {
                if (ev.districts_set) {
                    this.districts = [defaultDistrict].concat(ev.districts_set)
                } else {
                    this.districts = [defaultDistrict];
                }
                this.selDistrict = defaultDistrict
                this.$emit('change', [this.selProvince, ev, null])
            },
            districtChange: function (ev) {
                this.$emit('change', [this.selProvince, this.selAmphur, ev])
            }
        }
    }
</script>