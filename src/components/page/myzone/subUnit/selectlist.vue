<template>
    <div>
        <div class="selectlist">
            <div class="title">地区</div>
            <div class="select-box">
                <seltiplist  v-model="loacl_select">
                    <seltipoption v-for=" item in local " :key="item" :label="item.label" :value="item"></seltipoption>
                </seltiplist>
            </div>
        </div>
        <div class="selectlist">
            <div class="title">薪资要求</div>
            <div class="select-box">
                <seltiplist  v-model="salary_select">
                    <seltipoption v-for=" item in salary " :key="item" :label="item.label" :value="item"></seltipoption>
                </seltiplist>
            </div>
        </div>
        <div class="selectlist">
            <div class="title">福利待遇</div>
            <div class="select-box">
                <seltiplist :multiple="true"  v-model="treatment_select">
                    <seltipoption v-for=" item in treatment " :key="item" :label="item.label" :value="item"></seltipoption>
                </seltiplist>
            </div>
        </div>
    </div>

</template>
<script>
    import seltiplist from "./seltiplist.vue";
    import seltipoption from "./seltipoption.vue";


    export default{
        components: {
            seltiplist,
            seltipoption
        },
        data(){
            return{
                loacl_select:"",
                treatment_select:[{
                    id:4,
                    label:"项目奖金"
                }],
                salary_select:"",
                local:[{
                    id:1,
                    label:"北京"
                },{
                    id:2,
                    label:"安徽"
                },{
                    id:3,
                    label:"上海"
                },{
                    id:4,
                    label:"广州"
                }],
                treatment:[{
                    id:1,
                    label:"五险一金"
                },{
                    id:2,
                    label:"交通补助"
                },{
                    id:3,
                    label:"带薪年假"
                },{
                    id:4,
                    label:"项目奖金"
                }],
                salary:[{
                    id:1,
                    label:"4000以下"
                },{
                    id:2,
                    label:"4000-6000"
                },{
                    id:3,
                    label:"6000-8000"
                },{
                    id:4,
                    label:"8000以上"
                }]
            }
        },
        methods: {}
    }
</script>
