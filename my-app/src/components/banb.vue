<template>
    <div class="banb-box">
        <ul>
            <li v-for="(v,i) in arr" :key="i" :style="colorArr[i]">
                <a :style="txtArr[i]" href="#">{{v}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
            bool:"",
            colorArr:[],
            txtArr:[],
        }
    },
    props:{
        arr:{
            type:Array,
            required:true
        }
    },
    methods: {
        RandomColor() {
				let r, g, b;
				r = Math.floor(Math.random() * 256);
				g = Math.floor(Math.random() * 256);
				b = Math.floor(Math.random() * 256);
                return "border-color:rgb(" +r + ',' +g+ ',' +b+ ")";
        },
        RandomColorb() {
				let r, g, b;
				r = Math.floor(Math.random() * 256);
				g = Math.floor(Math.random() * 256);
				b = Math.floor(Math.random() * 256);
                return "color:rgb(" +r + ',' +g+ ',' +b+ ")";
        }
    },
    created () {
        let len = this.arr.length;
        let colorArr = [];
        let txtArr = [];
        for(let i=0;i<len;i++){
            colorArr.push(this.RandomColor());
            txtArr.push(this.RandomColorb());
        }
        this.colorArr = colorArr;
        this.txtArr = txtArr;

    }
    

}
</script>
<style scoped>
    
    .banb-box ul{
        white-space: nowrap;
        overflow: auto;
        font-size: 0;
        padding:0 .08rem;
    }
    .banb-box ul li{
        display: inline-block;
        border: 1px solid #eee;
        margin:0 .1rem .1rem;
        border-radius: .08rem;
    }
    .banb-box li:nth-child(5n){
        display: block;
        border:none;
        padding:0;
    }
    .banb-box li:nth-child(5n) a{
        display: block;
        border:none;
        padding:0;
        width:0;
        height:0;
    }
    .banb-box a{
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
        letter-spacing: .016rem;
        /* overflow: auto; */
        display: block;
        text-align: center;
        font-weight: 500;
        font-size:.16rem;
    }
</style>