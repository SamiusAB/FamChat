<template>
  <div class="login">
      <h3>Sign In</h3>
      <input type="text" placeholder="Email"><br>
      <input type="password" placeholder="Password"><br>
      <router-link to="chat">
        <button id="myButton" class="foo bar">Go!</button>
      </router-link>
      <p>You don't have an account? You can <router-link to="./sign-up">  create one</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function(){
      return {}
  },
  methods: {
    login: function(){
      this.$router.replace('./chat')
    }
  } 
}
</script>

<style scoped>
  .login{
    margin-top: 40px;
    text-align: center;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>


