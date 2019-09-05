<template>
    <div>
       <div class="top-box">
           <top-nav></top-nav>
        </div> 

        <download></download>
        <div class="loging-box" v-if="obj.length<1?true:false">
            <img src="../../static/loading.gif">
        </div>
        <div v-else>
            <shopp-details :title="obj.title" :address="obj.loc_name" :imgUrl="obj.image" :startTime="obj.time_str" :endTime="obj.begin_time" :juTiAddress="obj.address" :price="obj.fee_str" :category_name="obj.category_name" :deatContent="obj.content"></shopp-details>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
import shoppDetails from '../components/shoppDetails'
import foot from '../components/foot'
export default {
    components:{
        topNav,
        download,
        shoppDetails,
        foot
    },
    data(){
        return {
            obj:[]
        }
    },
    created () {
        
        let newId = this.$route.query.id;
        this.axios({
            method:"get",
            url:"/homes"
        }).then((data)=>{
            data.data.shouye.filter((v,i)=>{
                if(v.id == newId){
                    this.obj =data.data.shouye[i];
                }
            })
        },(err)=>{
            console.log(err)
        })

    }
}
</script>
<style scoped>
    .top-box{
        padding-bottom:.5rem;
    } 
    .loging-box{
    text-align: center
}
</style>