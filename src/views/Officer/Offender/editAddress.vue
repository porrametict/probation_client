<template>
    <v-container v-if="offender">
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       เเก้ไขรายละเอียด
                    </span>
            </p>
            <v-spacer></v-spacer>
        </div>
        <v-card>
            <v-card-title>
                <div>
                    <v-btn color="primary" @click="goto_create">
                        เพิ่ม
                    </v-btn>
                </div>
            </v-card-title>
            <v-divider class="ma-0 pa-0"></v-divider>
            <div class="py-2">
                <div v-for="(address,index) in offender_address_render" :key="index">
                    <div v-if="address_sel_index != index">
                        <data-list-render :data="[offender_address_render[index]]">
                            <template v-slot:header>
                                <div class="d-flex justify-content-between">
                                    <p class="title white--text ">ที่อยู่ของผู้ถูกคุม ที่ {{index +1 }}</p>

                                    <div>
                                        <v-btn icon color="white" outlined class="ma-1"
                                               v-if="address_sel_index == null">
                                            <v-icon color="white" @click="confirmDelete(index)">mdi-trash-can</v-icon>
                                        </v-btn>
                                        <v-btn icon outlined color="white" v-if="address_sel_index == null"
                                               class="ma-1">
                                            <v-icon color="white" @click="editMode(index)">mdi-pencil</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </template>
                        </data-list-render>
                    </div>
                    <div v-else>
                        <v-card class="ma-3 pa-3" color="orange">
                            <v-card-text>
                                <div class="d-flex justify-content-between">
                                    <div class="white--text title">
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                        เเก้ไข
                                    </div>
                                    <div>
                                        <v-btn color="grey" class="white--text ma-2" @click="cancel_edit_mode">
                                            ยกเลิก
                                        </v-btn>
                                        <v-btn color="primary" class="ma-2" @click="save_update(index)">
                                            บันทึก
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-text class="pa-3 white">
                                <v-text-field
                                        label="บ้านเลขที่"
                                        outlined
                                        v-model="address_sel.o_address_house"
                                        :error="!!error.o_address_house"
                                        :error-messages="error.o_address_house"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="หมู่บ้าน/ชุมชน"
                                        outlined
                                        v-model="address_sel.o_address_village"
                                        :error="!!error.o_address_village"
                                        :error-messages="error.o_address_village"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="หมู่ที่"
                                        outlined
                                        v-model="address_sel.o_address_mu"
                                        :error="!!error.o_address_mu"
                                        :error-messages="error.o_address_mu"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="ชอย"
                                        outlined
                                        v-model="address_sel.o_address_alley"
                                        :error="!!error.o_address_alley"
                                        :error-messages="error.o_address_alley"
                                >
                                </v-text-field>
                                <v-text-field
                                        label="ถนน"
                                        outlined
                                        v-model="address_sel.o_address_street"
                                        :error="!!error.o_address_street"
                                        :error-messages="error.o_address_street"
                                >

                                </v-text-field>
                                <v-text-field
                                        label="รหัสไปรษณีย์"
                                        outlined
                                        v-model="address_sel.o_address_zip_code"
                                        :error="!!error.o_address_zip_code"
                                        :error-messages="error.o_address_zip_code"
                                >

                                </v-text-field>
                                <district-select
                                        outlined
                                        :val-amphur="address_sel.o_address_amphure"
                                        :val-district="address_sel.o_address_district"
                                        :val-province="address_sel.o_address_province"
                                        @change="updateDistrictSelect"
                                >
                                </district-select>
                                <v-select
                                        label="สถานะที่อยู่"
                                        outlined
                                        v-model="address_sel.o_address_status"
                                        item-text="name"
                                        item-value="key"
                                        :items="[
                                    {
                                        key : true,
                                       name : 'ที่อยู่ปัจจุบัน'
                                    },
                                    {
                                    key : false,
                                    name : 'ที่อยู่เก่า'
                                    }
                                ]">

                                </v-select>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

            </div>
        </v-card>

    </v-container>
</template>
<script>
    import DistrictSelect from "../../../components/share/districtSelect";
    import Base from "../../../components/share/Base";
    import DataListRender from "../../../components/share/DataListRender";

    export default {
        extends: Base,
        name: "editAddress",
        components: {DataListRender, DistrictSelect},
        data: () => ({
            offender: null,
            offender_address_render: [],
            address_sel: null,
            address_sel_index: null
        }),
        async created() {
            await this.loadData()
        },
        methods: {
            goto_create() {
                this.$router.push({name: 'createOffenderAddress'})
            },
            confirmDelete(id) {
                confirm('You want to delete this item ? ') && this.delete_address(id)
            },
            async delete_address(index) {
                let id = this.offender.offenderaddress_set[index].id
                let result = await this.$store.dispatch('offender/deleteAddress', id)
                if (result != null) {
                    this.$router.go(0)
                }
            },
            async save_update(index) {
                let result = await this.$store.dispatch('offender/updateAddress', this.address_sel)
                if (result) {
                    this.$router.go(0)
                }
            },
            cancel_edit_mode() {
                this.address_sel_index = null
                this.address_sel = null
            },
            editMode(index) {
                this.address_sel_index = index
                this.address_sel = this.offender.offenderaddress_set[index]
            },
            async loadData() {
                this.offender = await this.$store.dispatch('offender/getUserDetail', this.$route.params.id)
                this.address_preparing()
            },
            updateDistrictSelect: function (value) {
                this.address_sel.o_address_province = value[0]
                this.address_sel.o_address_amphure = value[1]
                this.address_sel.o_address_district = value[2]
                if (value[0]) {
                    this.address_sel.o_address_province = value[0].id
                }
                if (value[1]) {
                    this.address_sel.o_address_amphure = value[1].id
                }
                if (value[2]) {
                    this.address_sel.o_address_district = value[2].id
                }
            },
            address_preparing() {
                let data_list = this.offender.offenderaddress_set
                data_list.forEach(element => {
                    let label = ""
                    label = "ที่อยู่"
                    this.offender_address_render.push({
                        label: label,
                        data: [
                            {
                                key: "บ้านเลขที่",
                                value: element.o_address_house
                            },
                            {
                                key: "หมู่บ้าน/ชุมชน",
                                value: element.o_address_village
                            },
                            {
                                key: "หมู่ที่",
                                value: element.o_address_mu
                            },
                            {
                                key: "ซอย",
                                value: element.o_address_alley
                            },
                            {
                                key: "ถนน",
                                value: element.o_address_street
                            },
                            {
                                key: "ตำบล",
                                value: element.district ? element.district.name_th : null
                            },

                            {
                                key: "อำเถอ",
                                value: element.amphure ? element.amphure.name_th : null
                            },
                            {
                                key: "จังหวัด",
                                value: element.province ? element.province.name_th : null
                            },
                            {
                                key: "รหัสไปรษณีย์",
                                value: element.o_address_zip_code
                            },
                            {
                                key: "สถานะ",
                                value: element.o_address_status === true ? 'ที่อยู่ปัจจุบัน' : 'ที่อยู่เก่า'
                            },
                        ]
                    })
                });
            },

        },
    }
</script>

<style scoped>

</style>