<template>
  <div class="big-box">
    <div class="txt-box">
      <h3>{{title}}</h3>
      <p>{{content}}</p>
    </div>
    <div class="img-box">
      <img :src="imgUrl"/>
    </div>
    <div class="bottom-box">
        <p>{{category_name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default:
        "江湖不是打打杀杀，江湖事人情世故江湖不是打打杀杀，江湖事人情世故江湖不是打打杀杀，江湖事人情世故"
    },
    content: {
      type: String,
      required: true,
      default: "江湖不是打打杀杀，江湖事人情世故"
    },
    imgUrl: {
      type: String,
      required: true,
      default: "../../../static/1.jpg"
    },
    category_name:{
      type:String,
      required:true
    },
    
  }
};
</script>
<style scoped>
.big-box {
  padding: .1rem 0rem 1.9rem;
  margin:0rem .2rem 0rem;
  border-bottom:1px solid #ddd;
}
.txt-box {
  font-size: 0.12rem;
  float: left;
  width: 70%;
}
.txt-box h3 {
  margin-top: 0;
  margin-bottom: 0.06rem;
  line-height: 0.25rem;
  text-align: justify;
  font-size: 0.17rem;
  font-weight: 500;
  color: #494949;
  padding-bottom: .1rem;
}
.big-box p {
  /* line-height: .15; */
  text-align: justify;
  color: #aaa;
  font-size: 0.12rem;
  overflow: hidden;
}

.img-box {
  float: right;
  width: 25.6%;
}
.img-box img{
  width: 100%;
  height: 1.2rem;
  vertical-align: top;
}
.bottom-box{
    width: 100%;
    display: block;
    float: left;
    margin-top: .2rem;
}

</style>