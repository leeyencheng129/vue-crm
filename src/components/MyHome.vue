<template>
<div>
  <h3 class="home-container">
    <Myheader></Myheader>
    <div class="home-main-box">
      <MyAside></MyAside>
      <div class="home-main-box">
        <router-view></router-view>
        </div>
    </div>

  </h3>
</div>
</template>

<script>
import Myheader from './subcomponents/MyHeader.vue'
import MyAside from './subcomponents/MyAside.vue'
export default {
  components: {
    Myheader,
    MyAside
  }
}
</script>

<style lang="scss">
.home-container{
.home-main-box{
  display: flex;
  height: 100vh;
  .home-main-box{
    width: 80%;
padding: 1% 2%;
  }
}
}
</style>
