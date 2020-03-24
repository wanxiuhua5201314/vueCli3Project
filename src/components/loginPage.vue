<template>
  <div class="hello">
    <div class="login-form">
  <el-form :model="formData" label-width="80px">
  <el-form-item label="用户名:">
    <el-input v-model="formData.userName" placeholder="用户"></el-input>
  </el-form-item>
  <el-form-item label="密码:">
    <el-input v-model="formData.passWord" autocomplete="on" type="password" placeholder="密码"></el-input>
  </el-form-item>
  <el-form-item>
    <!-- <el-button type="primary" @click="onSubmit">登陆</el-button> -->
     <el-button type="primary" @click="saveInfo">保存信息</el-button>
      <el-button type="primary" @click="test">测试localStorage</el-button>
  </el-form-item>
  <el-form-item>
       <el-button type="primary" @click="openTwoWindow">打开两个新的窗口</el-button>
  </el-form-item>
</el-form>
    {{localInfo.userName}} {{localInfo.passWord}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
       formData:{
         userName:'',
         passWord:''
       },
       localInfo:{
          userName:'',
         passWord:''
       }
    }
  },
  props: {
    msg: String
  },
  methods:{
    onSubmit(){
      this.$parent.loginPageShow=false;
      this.$parent.mainPageShow=true;
    },
    saveInfo(){
      localStorage.setItem('userInfo',JSON.stringify(this.formData))
    },
    test(){
      this.localInfo=JSON.parse(localStorage.getItem('userInfo'));
    },
    openTwoWindow(){
      // window.open("http://localhost:8081/#/page1",'width=1920,height=990');
     let myWindow=window.open('http://localhost:8081/#/page1','','width=1500,height=900');
     myWindow.focus();//把键盘焦点给予一个窗口
     window.open('http://localhost:8081/#/page2','','width=1500,height=900');
    }
  }
}
</script>

<style lang="scss" scoped>
.hello{
   width:100%;
   height:100%;
   .login-form{
     position:absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%)
   }
}

</style>
