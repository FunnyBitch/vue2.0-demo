<template>
    <div class="hello">
        <head-top head-title="map"></head-top>
        <h1>{{test}}</h1>
        <input type="text" v-model="test" />
    </div>
</template>

<script>
    import headTop from './../common/header'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                test:"order"
            }
        },
        components: {
            headTop,
        },
        methods:{
            goBack() {
                let that = this;
                that.$router.go(-1)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
