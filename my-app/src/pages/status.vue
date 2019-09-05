<template>
    <div>
        <div class="top-box">
            <top-nav></top-nav>
        </div>
        <download></download>
        <loginAndNot></loginAndNot>
        
    </div>
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
import loginAndNot from '../components/loginAndNot'
export default {
    components:{
        topNav,
        download,
        loginAndNot
    }
}
</script>
<style scoped>
    .top-box{
        padding-bottom:.53rem;
    }
    
</style>>
    