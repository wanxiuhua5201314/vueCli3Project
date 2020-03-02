<template>
  <div class="hello">
  <el-form :model="formData" label-width="80px">
  <el-form-item label="审批人:">
    <el-input v-model="formData.userName" placeholder="用户"></el-input>
  </el-form-item>
  <el-form-item label="活动区域:">
    <el-input v-model="formData.passWord" placeholder="密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登陆</el-button>
  </el-form-item>
</el-form>
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
  }
}
</script>

<style scoped>
.hello{
  /* width:40px;
  height:40px; */
}

</style>
