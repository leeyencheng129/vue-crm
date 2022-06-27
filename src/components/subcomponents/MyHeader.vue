<template>
  <div class="header-container">
    <div class="img">
      <img src="@/assets/logo.svg">
    </div>
    <div class="tx">
      <button @click="logout">退出登入</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  .img {
    width: 110px;
    padding: 0% 2%;
  }
  .tx {
    width: 100px;
    padding: 0.5% 2%;
    button {
      border: 0;
      background: rgb(216, 44, 101);
      font-size: 16px;
      border-radius: 20px;
      color: #fff;
      padding: 5% 2%;
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
