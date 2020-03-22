<template>
  <div class="hello">
    <div class="login-form">
  <el-form :model="formData" label-width="80px">
  <el-form-item label="用户名:">
    <el-input v-model="formData.userName" placeholder="用户"></el-input>
  </el-form-item>
  <el-form-item label="密码:">
    <el-input v-model="formData.passWord" placeholder="密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登陆</el-button>
  </el-form-item>
</el-form>
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
