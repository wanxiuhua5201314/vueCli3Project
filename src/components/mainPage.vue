<template>
  <div class="main-page">
   <div class="left-content">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to="/home">首页</router-link></span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span><router-link to="/system">系统管理</router-link></span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>

   </div>
  <div class="right-content">
    <router-view></router-view>
  </div>
  </div>

</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.main-page{
  width:100%;
  height: 100%;
  padding:16px;
}
.left-content{
  width:20%;
  height: 100%;
}
.right-content{
  width:80%;
  height: 100%;
}

</style>