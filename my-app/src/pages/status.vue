<template>
<div>
    <sou-suo :num="num"></sou-suo>
    <div v-show="num==1?true:false">
        <div class="big-box">
            <div class="top-box">
                <top-nav></top-nav>
            </div>
            <download></download>
            <loginAndNot></loginAndNot>
            <diary></diary>
            <diary></diary>
            <diary></diary>
            <diary></diary>
            <diary></diary>
            <p>显示更多广播</p>
            <foot></foot>
        </div>
    </div>
</div>
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
import loginAndNot from '../components/loginAndNot'
import diary from '../components/diary'
import foot from '../components/foot'
import souSuo from '../components/souSuo'
export default {
    components:{
        topNav,
        download,
        loginAndNot,
        diary,
        foot,
        souSuo
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    }
}
</script>
<style scoped>
    
    .top-box{
        padding-bottom:.53rem;
    }
    p{
        display: block;
        padding: .5rem 0;
        font-size: .16rem;
        line-height: .18rem;
        text-align: center;
        color: #42bd56;
    }
    
</style>>
    