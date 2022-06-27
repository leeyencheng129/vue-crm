<template>
<div class="login-container">
  <h3>login</h3>
  <div class="form">
    <label for="username">登入名稱</label>
    <input type="text" class="userInput" id="username" placeholder="請輸入登入名稱" autocomplete="off" v-model.trim="username">
    <br>
    <label for="password">密碼</label>
    <input type="text" class="userInput" id="password" placeholder="請輸入密碼" autocomplete="off" v-model.trim="password">
    <div class="btnArea">
      <button type="button" class="resetBtn" @click="reset">重製</button>
      <button type="button" class="loginBtn" @click="login">登入</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset () {
      this.username = ''
      this.password = ''
    },
    login () {
      if (this.username === 'admin' && this.password === '666666') {
        localStorage.setItem('token', 'Bearer xxxx')
        this.$router.push('/home')
      } else {
        // fail
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  background: rgb(59, 56, 49);
  width: 300px;
  margin: auto;
  padding: 3% 5%;
  color:#fff;
  label{
    width: 72px;
    display: inline-block;
  }
  .btnArea{
    display: flex;
    justify-content: center;
    margin-top: 10%;
    button{
      margin: 0 2%;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      padding: 2% 5%;
      color:#fff

    }
     .resetBtn{
        background: #aaa;
      }
      .loginBtn{
        background: rgb(82, 212, 31);
      }
  }
}
</style>
