<template>
    <div>
        <div class="top-box">
            <top-nav></top-nav>
        </div>
        <login-and-not></login-and-not>
        <zu-fang :arr="arra"></zu-fang>
        <zu-fang :arr="arrb"></zu-fang>
        <zu-fang :arr="arrc"></zu-fang>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import loginAndNot from '../components/loginAndNot'
import zuFang from '../components/group/zuFang'
import foot from '../components/foot'
export default {
    components:{
        topNav,
        loginAndNot,
        zuFang,
        foot
    },
    data () {
        return {
            arra:[],
            arrb:[],
            arrc:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/xiaozu"
        }).then((data)=>{
            this.arra = data.data.xiaozua;
            this.arrb = data.data.xiaozub;
            this.arrc = data.data.xiaozuc;

        },(err)=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
    .top-box{
        padding-bottom:.51rem;
    }
</style>