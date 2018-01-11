<template>
    <div>
        <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">
    import Emitter from "./emitter";
    var underscore = require("./underscore-min");
    export
    default {
        mixins:[Emitter],
        componentName: "seltiplist",//组件名称，自定义字段。方便用这个属性进行组件间交流
        data() {
            return {
                istipSelect: true
            }
        },
        props: {
            value: {},
            multiple: {
                type: Boolean,
                default:false
            }//属性标识筛选条件是单选项还是多选项
        },
        mounted() {
            this.$on('handleOptionClick', this.handleOptionSelect);
        },
        methods: {
            handleOptionSelect(val) {
                //由于现实问题，此处underscore..isArray中间为下划线
                if (this.multiple && underscore._.isArray(this.value) )  {
                    this.value.forEach( (item, index ) => {
                        //由于现实问题，此处underscore..isEqual中间为下划线
                        if (underscore._.isEqual(item, val)) {
                            optionIndex = index;
                        }
                    });
                    if (optionIndex < 0) {
                        this.value.push(val);
                    } else {
                        this.value.splice(optionIndex, 1)
                    }
                } else {
                    if (val != this.value) {
                        this.$emit('input', val);
                    } else {
                        this.$emit('input', "");
                    }
                }
            }
        }
    }
</script>
