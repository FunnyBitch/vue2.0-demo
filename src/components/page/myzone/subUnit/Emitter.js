function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        var name = child.$options.componentName;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat(params));
        }
    });
}
export default {
    methods: {
        //事件向上传播，参数：接收事件组件的componentName属性，事件名称，传入的参数
        dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;
            //根据组件的componentName值，找到父组件
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            ///父组件触发$emit回调
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        //事件向下传播，参数：接收事件组件的componentName属性，事件名称，传入的参数（原理同上）
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
};
