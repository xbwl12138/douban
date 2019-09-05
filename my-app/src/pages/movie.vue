<template>
    <div>
        <div class="top-box">
            <top-nav></top-nav>
        </div>
        <ban :v="arr[0]"></ban>
        <movie-ban :arr="movieArra"></movie-ban>
        <ban :v="arr[1]"></ban>
        <movie-ban :arr="movieArrb"></movie-ban>
        <ban :v="arr[2]"></ban>
        <movie-ban :arr="movieArrc"></movie-ban>
        <ban :v="arr[3]"></ban>
        <banb :arr="arrb"></banb>
        <class-list></class-list>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import ban from '../components/ban'
import banb from '../components/banb'
import movieBan from '../components/movieBan'
import classList from '../components/classList'
import foot from '../components/foot'
export default {
    components:{
        topNav,
        ban,
        banb,
        movieBan,
        classList,
        foot
    },
    data(){
        return {
            movieArr:[],
            movieArra:[],
            movieArrb:[],
            movieArrc:[],
            arr:["影院热映","免费在线观影","新片速递","发现好电影"],
            arrb:[],
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/movies"
        }).then((data)=>{
            // console.log(data.data.movie);
            this.movieArr = data.data.movie;
            data.data.movie.filter((v,i)=>{
                if(i<8){
                    this.movieArra.push(v);
                }else if(i>7 && i<15){
                    this.movieArrb.push(v);
                }else if(i>14 && i<25){
                    this.movieArrc.push(v);
                }
            })
        },(err)=>{
            console.log(err);
        })

        this.axios({
            method:"get",
            url:"/movienav"
        }).then((data)=>{
            console.log(data.data.faxianhaodianying);
            this.arrb = data.data.faxianhaodianying;
        },(err)=>{
            console.log(err);
        })
    }
}
</script>
<style socped>
    .top-box{
        padding-bottom:.53rem;
    }
    
</style>