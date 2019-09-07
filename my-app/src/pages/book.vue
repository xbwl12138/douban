<template>
    <div>
        <sou-suo :num="num"></sou-suo>
        <div v-show="num==1?true:false">
            <div class="top-box">
                <top-nav></top-nav>
            </div>
            <ban :v="arr[0]"></ban>
            <movie-ban :arr="bookArra"></movie-ban>
            <ban :v="arr[1]"></ban>
            <movie-ban :arr="bookArrb"></movie-ban>
            <ban :v="arr[2]"></ban>

            <div class="dou-zhi">
                <span>
                    <img src="../../static/1.jpg">
                </span>
                <span class="span-first">
                    <div class="book-name">
                        <span>造物</span>
                        <span>￥36</span>
                    </div>
                    <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
                </span>
            </div>
            <movie-ban :arr="bookArrc"></movie-ban>

            <ban :v="arr[3]"></ban>
            <banb :arr="arrc"></banb>   
            <class-list></class-list>
            <foot></foot>
        </div>
    </div>
</template>
<script>
import topNav from '../components/topNav'
import ban from '../components/ban'
import classList from '../components/classList'
import foot from '../components/foot'
import banb from '../components/banb'
import movieBan from '../components/movieBan'
import souSuo from '../components/souSuo'

export default {
    components:{
        topNav,
        ban,
        banb,
        movieBan,
        classList,
        foot,
        souSuo
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    },
    data(){
        return {
            bookArra:[],
            bookArrb:[],
            bookArrc:[],
            arr:["最受关注图书｜虚构类","最受关注图书｜非虚构类","豆瓣纸书","发现好书"],
            arrc:[],
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/books"
        }).then((data)=>{
            data.data.books.filter((v,i)=>{
                if(i<8){
                    this.bookArra.push(v);
                }else if(i>7 && i<15){
                    this.bookArrb.push(v);
                }else if(i>14 && i<25){
                    this.bookArrc.push(v);
                }
            })
        },(err)=>{
            console.log(err)
        })

        this.axios({
            method:"get",
            url:"/booknav"
        }).then((data)=>{
                console.log(data.data.goodBook)
            this.arrc = data.data.goodBook
        },(err)=>{
            console.log(err)
        })
    }
}
</script>
<style socped>
    .top-box{
        padding-bottom:.53rem;
    }
    .dou-zhi{
        padding:.1rem .2rem .2rem;
        overflow: hidden;
    }
    .dou-zhi img{
        float: left;
        width: 1rem;
        margin-right: .15rem;
    }
    .book-name{
        font-size:.2rem;
        margin-top:.2rem;
        color: #494949;
        line-height: .22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        margin-bottom:.1rem;
    }
    .book-name span:last-child{
        float:right;
        color: #e76648;
        font-size: .16rem;
        line-height: .22rem;
    }
    .span-first p{
        font-size: .13rem;
        font-weight: 300;
        /* line-height: .15; */
        color: #9b9b9b;
    }
    
    
</style>