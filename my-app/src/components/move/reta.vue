<template>
    <div>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
    </div>
</template>
<script>
export default {
    computed: {
        value(){
            return (this.values/2).toFixed(1)
        }
    },
    props:{
        values:{
            type:Number,
            required:true      
        }
    }
}
</script>
<style scoped>
    div{
        font-size:.16rem;
        color:#000;
    }
</style>