// views/Profile.vue
<template>
  <div class="home">
    <h4>username : <input type="text"></h4>
    <h4>password : <input type="password"></h4>
    <h4><button @click="btnclicked">login</button></h4>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods : {
    btnclicked : function(){
      console.log("正在登陆...跳转新的页面");
      this.$router.push("/profile");
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 40px 0 0;
}
button {
  padding: 10px 30px;
}

</style>