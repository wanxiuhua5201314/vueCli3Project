<template>
  <div  class="demo-page2">
        这是新窗口页面2
        <br/>
        接收到的消息是：{{reciveInfo}}
        <br/>
   <div class="all-components">
        <span>引入自己npm上的组件1:</span>
        <div class="one-components"><components-one></components-one></div>
  </div>
  <div class="all-components">
       <span > 引入自己npm上的组件2:</span>
        <components-two></components-two>
  </div>
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
<style lang="scss" scoped>
   .all-components{
     width: 100%;
     height: 60px;
     display: flex;
     align-items: center;
     span + span{
       margin-left:20px;
     }
     .one-components{
       height:40px;
       width:80px;
     }
   }
</style>
