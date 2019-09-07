<template>
    <div class="big-box">
        <div class="movie-box" v-for="(v,i) in arr" :key="i">
            <router-link :to="{path:'/movieb',query:{id:v.id}}">
                <img :src="v.images.large">
                <p>{{v.title}}</p>
                <reta :values="v.rating.average"></reta>
            </router-link>
        </div>
    </div>
</template>
<script>
import reta from '../components/move/reta'
export default {
    components: {
        reta
    },
    props:{
        arr:{
            type:Array,
            required:true
        }
    },
    created () {
        // if()
    }
}
</script>
<style scoped>
    .big-box{
        padding:0 .2rem;
        overflow: auto;
        display: flex;
    }
    .movie-box{
        margin-right:.1rem;
        font-size:0;
    }
    .movie-box img{
        width:1.5rem;
        height: 2rem;
    }
    .movie-box p{
        font-size:.16rem;
        text-align: center;
        line-height: .16rem;
        padding:.2rem 0;
    }
</style>