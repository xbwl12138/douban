<template>
    <div>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" :score-template="valueb"></el-rate>
    </div>
</template>
<script>
export default {
    computed: {
        value(){
            return parseFloat((this.values/2).toFixed(1));
            // return this.values;
        },
        valueb(){
            return (this.values).toString();
        }
    },
    props:{
        values:{
            type:[Number,String],
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