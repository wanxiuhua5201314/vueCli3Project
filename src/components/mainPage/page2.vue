<template>
  <div  class="demo-page2">
        这是新窗口页面2
        <br/>
        接收到的消息是：{{reciveInfo}}
  </div>
</template>
<script>
import {onData} from '@/utils/event-bus.js'
export default {
  data(){
    return{
      reciveInfo:''
    }
  },
  mounted(){
     document.title="page2";
    onData((data)=>{
       console.log("接收到的消息是",data);
       this.reciveInfo=data.data
    })
  }
}
</script>
