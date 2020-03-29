<template>
    <div v-if="provinces" >
        <v-select :items="provinces"
                  hide-details
                  item-text="name_th" label="จังหวัด"
                  v-model="selProvince"
                  return-object
                  @change="provinceChange">
<!--             :error-messages="error.house_province"-->
        </v-select>
        <v-select :items="amphurs"
                  hide-details
                  return-object
                  item-text="name_th" label="อำเภอ"
                  v-model="selAmphur"
                  @change="amphurChange">
        </v-select>
        <v-select :items="districts"
                  hide-details
                  return-object
                  v-model="selDistrict"
                  item-text="name_th" label="ตำบล"
                  @change="districtChange">
        </v-select>
    </div>

</template>
<script>
    let defaultProvince = {
        province_id: 0,
        name_th: "กรุณาเลือก",
    };
    let defaultAmphur = {
        amphur_id: 0,
        name_th: "กรุณาเลือก"
    };
    let defaultDistrict = {
        district_id: 0,
        name_th: "กรุณาเลือก"
    };
    export default {
        props: {
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
        data : () => ({
            provinces : [defaultProvince],
            amphurs:[defaultAmphur],
            districts:[defaultDistrict],
            selProvince: defaultProvince,
            selAmphur: defaultAmphur,
            selDistrict: defaultDistrict,
        }),
        async created () {
            let provinces = await this.$store.dispatch('districtSelect/getProvinces');
            this.provinces = [defaultProvince].concat(provinces);
            this.sync()
        },
        methods : {
            sync: function () {
                this.provinces.forEach((p) => {
                    if (p.province_id == this.valProvince) {
                        this.selProvince = p;
                        this.provinceChange(p);
                    }
                });
                this.amphurs.forEach((a) => {
                    if (a.amphur_id == this.valAmphur) {
                        this.selAmphur = a;
                        this.amphurChange(a);
                    }
                });
                this.districts.forEach((d) => {
                    if (d.district_id == this.valDistrict) {
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
                this.$emit('change', [ev, null, null])
            },
            amphurChange: function (ev) {
                if (ev.districts_set) {
                    this.districts = [defaultDistrict].concat(ev.districts_set)
                } else {
                    this.districts = [defaultDistrict];
                }
                this.$emit('change', [this.selProvince, ev, null])
            },
            districtChange: function (ev) {
                this.$emit('change', [this.selProvince, this.selAmphur, ev])
            }
        }
    }
</script>