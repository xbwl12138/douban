<template>
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
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
import loginAndNot from '../components/loginAndNot'
import diary from '../components/diary'
import foot from '../components/foot'
export default {
    components:{
        topNav,
        download,
        loginAndNot,
        diary,
        foot
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
    