<template>
    <div>
        <sou-suo :num="num"></sou-suo>
        <div v-show="num==1?true:false">
            <div class="top-box">
                <top-nav></top-nav>
            </div>
            <download></download>
            <movie-deta :arr="arr"></movie-deta>
            
            <foot></foot>
        </div>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import download from '../components/download'
import movieDeta from '../components/movieDeta'
import foot from '../components/foot'
import souSuo from '../components/souSuo'
export default {
    components:{
        topNav,
        download,
        movieDeta,
        foot,
        souSuo
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    },
    data () {
        return {
            arr:[]
        }
    },
    created () {
        let newId = this.$route.query.id;
        this.axios({
            method:"get",
            url:"/movies"
        }).then((data)=>{
            data.data.movie.filter((v,i)=>{
                if(v.id == newId){
                    this.arr =data.data.movie[i];
                    console.log(this.arr)
                }
            })
        },(err)=>{
            console.log(err)
        })

        // this.axios({
        //     method:"get",
        //     url:"/movies"
        // }).then((data)=>{
        //     // console.log(data.data.movie)
        //     this.arr = data.data.movie[0]
        //     console.log(this.arr)
        // },(err)=>{
        //     console.log(err)
        // })
    }
}
</script>
<style scoped>
    .top-box{
        padding-bottom:.51rem;
    }
</style>