<template>
  <div  class="demo-page2">
        这是新窗口页面2
        接收到的消息是：{{reciveInfo}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      reciveInfo:''
    }
  },
  mounted(){
     document.title="page2";
     let pageWindow2=sessionStorage.getItem('pageWindow2');
     pageWindow2.onmessage=function(e){
       this.reciveInfo=e.data

     }
  }
}
</script>
