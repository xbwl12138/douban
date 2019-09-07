<template>
    <div>
        <div class="topnav">
            <h1><router-link to="/home">豆瓣</router-link></h1>
            <ul>
                <li v-for="(v,i) in obj" :key='i'><router-link :to="v.url" :style="v.color">{{v.title}}</router-link></li>
                <!-- <li><router-link to="/more"><img src="../../static/more.png"></router-link></li> -->
                <li @click="fun()"><a><img src="../../static/more.png"></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        fun(){
            this.$store.commit("funa");
        }  
    },
    data(){
        return{
            obj:[
                {title:"电影",url:"/movie",color:"color:#2384e8"},
                {title:"图书",url:"/book",color:"color:#9f7860"},
                {title:"广播",url:"/status",color:"color:#e4a813"},
                {title:"小组",url:"/group",color:"color:#2ab8cc"}
            ]
        }
    }
}
</script>
<style scoped>
.topnav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .5rem;
    border-bottom: .01rem solid #f3f3f3;
    padding: 0rem .3rem;
    line-height: .5rem;
    display: flex;
    background-color: #fff;
}   
.topnav h1{
    font-size: .30rem;
}
.topnav h1 a{
    color: #00b600;
    font-size:.24rem;
    font-weight:600;
}
.topnav ul{
    display: flex;
    margin-left: .8rem;
}
.topnav ul li{
    font-size:.16rem;
    margin-right: .1rem;
    list-style: none;
    line-height: .55rem;
}
.topnav ul li img{
    margin-top: .19rem;
    width: .3rem;
    height: .2.5rem;
}

</style>