<template>
        <a @click="fun()">{{text}}</a>
</template>
<script>
export default {
    props:{
        text:{
            type:String,
            required:true
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    
</style>