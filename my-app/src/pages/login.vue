<template>
    <div>
        <div class="reg-box">
            <h1>
                <go-back :text="text"></go-back>
                登录豆瓣
            </h1>
            <div class="input-box">
                <input type="text" placeholder="邮箱" name="useremail"/>
                <input type="text" placeholder="Tokin" name="userpass"/>
                <button @click="regFun()">登录</button>
            </div>
            <p>使用其他方式登录 & 找回密码</p>
            <div class="a-box">
                <a>下载豆瓣APP</a>
            </div>
        </div>
    </div>
</template>
<script>
import goBack from '../components/goBack'
export default {
    data(){
        return {
            text:"取消"
        }
    },
    components:{
        goBack
    },
    methods:{
        regFun(){
            // 获取输入框的数据
            let uEmail = document.getElementsByName("useremail")[0].value;
            let uPass = document.getElementsByName("userpass")[0].value;
            let param = new URLSearchParams();
            param.append("uEmail",uEmail);
            param.append("uPass",uPass);
            this.axios({
                method:"post",
                url:"http://localhost:3000/denglu",
                data:param,
                beforeSend(){
                    document.getElementsByClassName("span")[0].style.display = "block";
                    console.log(document.getElementsByClassName("span")[0])
                }
            }).then((ok)=>{
                let linkId = ok.data.linkId;
                if(linkId == 0){
                    alert("恭喜用户"+ok.data.uEmail+"登录成功")
                    this.$router.push("/home");
                }else if(linkId == 3){
                    alert("邮箱已被注册，请重新输入用户名");
                }else if(linkId == 1){
                    alert("登录失败，邮箱或者密码错误");
                }
            },(err)=>{
                console.log(err);
            })
        }
      
    }
    
}
</script>
<style scoped>
    .input-box{
        padding:0 .2rem;
        font-size: 0;
        padding-top: .2rem;
    }
    .reg-box{
        font-size:0;
    }
    span{
        font-size: .18rem;
    }
    .reg-box h1{
        height: .45rem;
        margin: 0 0 .1rem;
        padding: 0 .18rem;
        line-height: .45rem;
        background: #fff;
        border-bottom: .01rem solid #eee;
        text-align: center;
        font-size: .18rem;
        font-weight: 700;
    }
   .reg-box h1 a{
        position: absolute;
        left: .18rem;
        top: 0;
        color: #42bd56;
        font-size: .15rem;
        font-weight: 400;
    }
   
    p{
        font-size: .14rem;
        color: #aaa;
        text-align: center;
        margin-top:.1rem;
    }
    .a-box{
        width:100%;
        margin-top: .4rem;
        margin-right: 1.5rem;
        text-align: center;
        font-size:0;
    }
    .a-box a{
        font-size:.15rem;
        color: #42bd56;
    }
    input{
        display: inline-block;
        width: 100%;
        height: .44rem;
        padding: .08rem;
        box-sizing: border-box;
        font-size: .15rem;
        background: #fff;
        border: .01rem solid #ccc;
        border-top-left-radius: .03rem;
        border-top-right-radius: .03rem;
        outline: 0;
    }
    button{
        cursor: pointer;
        width: 100%;
        padding: .12rem .26rem;
        margin-top: .1rem;
        font-size: .17rem;
        text-align: center;
        color: #fff;
        background: #42bd56;
        border: .01rem solid #17aa52;
        border-radius: .03rem;
    }
</style>