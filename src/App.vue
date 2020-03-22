<template>
  <div id="app">
  <login-page v-show='loginPageShow'></login-page>
   <main-page v-show='mainPageShow'></main-page>
  </div>
</template>

<script>
import loginPage from './components/loginPage.vue'
import mainPage from './components/mainPage.vue'
export default {
  name: 'app',
  components: {
    loginPage,
    mainPage
  },
  data(){
    return{
      loginPageShow:true,
      mainPageShow:false,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}
html,body{
  width:100%;
  height:100%
}
</style>
