<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
	margin:0;
	padding:0;
}
html{
	font-size: 26.67vw;
  font-size:sans-serif;
}
.app-nav{
  font-size:.24rem;
  color:fuchsia;
}
a{
  text-decoration:none;
}
li{
  list-style: none;
}
/* body{ */
  /* background-color: aquamarine; */
/* } */
</style>
