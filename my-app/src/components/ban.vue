<template>
    <div>
        <div class="ban-box">
            <h2>{{v}}</h2>
            <p>更多</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        v:{
            type:String,
            required:true
        }
    }
    
}
</script>
<style scoped>
    .ban-box{
        color: #111;
        padding:.18rem .2rem .38rem;;
        line-height: .18rem;
    }
    .ban-box h2{
        font-weight:400;
        font-size:.168rem;
        float: left;
    }
    .ban-box p{
        float: right;
        font-size:.168rem;
        color: #42bd56;
    }
    .look-box{
        padding:.2rem .2rem .42rem;
    }
</style>