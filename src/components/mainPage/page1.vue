<template>
  <div class="demo-page1">
    <div class="page-title">这是新窗口页面1,嵌入了有道云笔记的页面 </div>
    <div class="page-content">
      <iframe :src="src" frameborder='0' scrolling="auto" height="30%"  width="40%"></iframe>
      <hr size=5>
      <div style="display:flex;justify-content:center">
      <el-input style="width:200px;margin-right:10px" v-model='info' placeholder="请输入要发送的消息"></el-input>
      <el-button type="priamry" @click="sendInfo">给窗口2发送消息</el-button> 
      </div>
    </div>
  </div>
</template>
<script>
import {postData} from '@/utils/event-bus.js'
export default {
  data(){
    return{
      src:'https://note.youdao.com/web/#/file/recent/note/WEB79adcf16d779cc67d8886ef5198e2841/',
      info:'',
    }
  },
  mounted(){
    document.title="page1";
  },
  methods:{
     sendInfo(){
      //  window.postMessage('我是来自页面1的消息，请查收','http://localhost:8081/#/page2')
     postData(this.info)
     }
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
