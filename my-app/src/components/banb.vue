<template>
    <div class="banb-box">
        <ul>
            <li v-for="(v,i) in arr" :key="i" :style="v.line?'display: block;border:none;':''">
                <a :style="v.line?'height:0;':''" :href="v.href"><span :style="{color:v.color}">{{v.title}}</span></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            colorArr:[],
            txtArr:[],
        }
    },
    props:{
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    
    .banb-box ul{
        white-space: nowrap;
        overflow: auto;
        font-size: 0;
        padding:0 .08rem;
    }
    .banb-box ul li{
        display: inline-block;
        border: 1px solid #ffac2d;
        margin:0 .1rem .1rem;
        border-radius: .08rem;
    }
    .banb-box a{
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
        letter-spacing: .016rem;
        /* overflow: auto; */
        display: block;
        text-align: center;
        font-weight: 500;
        font-size:.16rem;
    }
</style>