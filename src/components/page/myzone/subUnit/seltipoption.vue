<template>
    <span class="tip" @click="selectOptionClick" :class="{'active':itemSelected }">{{currentLabel}}</span>
</template>
<script type="text/ecmascript-6">
    import Emitter from "./emitter";
    var underscore = require("./underscore-min");
    export default{
        mixins: [Emitter],
        componentName: "seltipoption",
        props: {
            value: {
                required: true
            },
            label: [String, Number],
        },
        //属性计算
        computed: {
            currentLabel() {
                return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
            },
            parent() {
                let result = this.$parent;
                while (!result.istipSelect) {
                    result = result.$parent;
                }
                return result;
            },
            itemSelected() {
                if (!this.parent.multiple) {
                    //由于现实问题，此处underscore..isEqual中间为下划线
                    return underscore._.isEqual( this.parent.value, this.value);
                } else {
                    let isSelected = false;
                    this.parent.value.forEach((item, index) => {
                        //由于现实问题，此处underscore..isEqual中间为下划线
                        if (underscore._.isEqual(item, this.value)) {
                            isSelected = true;
                        }
                    });
                    return isSelected;
                }
            },
        },
        methods: {
            selectOptionClick(){
                this.dispatch('seltiplist', 'handleOptionClick', this.value);
            }
        }
    }
</script>
