<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Vue App 3.0"/>
    By @Feng Zhiheng
  </div>
  <div class="home">
    <h4>Username : <input type="text" placeholder="用户名"></h4>
    <h4>Password : <input type="password" placeholder="密码"></h4>
    <h4><button @click="btnclicked">login</button></h4>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods : {
    btnclicked : function(){
      console.log("正在登陆...跳转新的页面");
      //进行页面跳转；
      this.$router.push("/profile");
      //在这里进行用户名、密码校验；

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 18px 0 0;
}
button {
  padding: 5px 30px;
}

</style>
