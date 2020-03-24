<template>
  <div class="demo-page1">
    <div class="page-title">这是新窗口页面1,嵌入了有道云笔记的页面 </div>
    <div class="page-content"><iframe :src="src" frameborder='0' scrolling="auto" height="100%"  width="90%"></iframe></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      src:'https://note.youdao.com/web/#/file/recent/note/WEB79adcf16d779cc67d8886ef5198e2841/'
    }
  },
  mounted(){
    document.title="page1";
  }
}
</script>
<style lang="scss">
.demo-page1{
  width:100%;
  height:100%;
  padding:0.8rem;
 .page-title{
    width:100%;
    height:2rem;
    line-height: 2rem;
    text-align: center;
 }
 .page-content{
   width:100%;
   height: 100%;
 }
}
</style>
