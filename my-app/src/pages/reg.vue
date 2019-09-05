<template>
    <div>
        <div class="reg-box" id="regBoxOne" v-show="bool">
            <h1>欢迎加入豆瓣</h1>
            <div class="input-box">
                <input type="text" placeholder="邮箱" name="useremail"/>
                <input :type="imgUrlBool?'password':'text'" placeholder="密码" name="userpass"/>
                <input type="text" placeholder="用户名" name="userpass"/>
                <img @click="textAndPass()" :src="imgUrlBool?'../../static/e1.png':'../../static/e2.png'">
                <button @click="regFun()">注册</button>
            </div>
            <p>点击「注册」代表你已阅读并同意用户使用协议</p>
            <div class="a-box">
                <a>下载豆瓣APP</a>
            </div>
        </div>
        <div class="reg-box" id="regBoxTwo" v-show="!bool">
            <h1>注册成功</h1>
            <div class="input-box">
                <p class="p-txt">请复制以下Token进行登录</p>
                <input type="text" id="inputTxt" name="userPassTwo"/>
                <button @click="fun()">去登陆</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components:{
        
    },
    data(){
        return {
            bool:true,
            imgUrlBool:true
        }
    },
    methods:{
        textAndPass(){
            this.imgUrlBool = !this.imgUrlBool;
        },
        regFun(){
            // 获取输入框的数据
            let uEmail = document.getElementsByName("useremail")[0].value;
            let uPass = document.getElementsByName("userpass")[0].value;
            let uName = document.getElementsByName("userpass")[0].value;
            let param = new URLSearchParams();
            param.append("uEmail",uEmail);
            param.append("uPass",uPass);
            param.append("uName",uName);
            // console.log(uEmail+"------"+uPass+"----"+uName);
            this.axios({
                method:"post",
                url:"http://localhost:3000/zhuce",
                data:param
            }).then((ok)=>{
                // console.log(ok);
                let linkId = ok.data.linkId;
                if(linkId == 0){
                    alert("恭喜用户"+ok.data.uName+"注册成功")
                    // 改变登录的显示与隐藏
                    this.bool = !this.bool;
                    document.getElementById("inputTxt").value = ok.data.uToken;
                }else if(linkId == 3){
                    alert("用户名重复，请重新输入用户名");
                }
            },(err)=>{
                console.log(err);
            })
        },
        fun(){
            this.$router.push("/login")
        }
    }
    
}
</script>
<style scoped>
    .input-box{
        padding:0 .2rem;
        font-size: 0;
        padding-top: .2rem;
        position: relative;
    }
    .reg-box{
        font-size:0;
    }
    .reg-box h1{
        margin: 9% 0 9%;
        font-size: .4rem;
        font-weight: 300;
        color: #42bd56;
        text-align: center;
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
    .p-txt{
        text-align: left;
        font-size: .16rem;
        color: #aaa;
        padding-bottom: .1rem;
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
    #inputTxt{
        font-size: .16rem;
        color: black;
    }
    img{
        width: .35rem;
        height: .3rem;
        position: absolute;
        top: .71rem;
        right: .3rem;
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