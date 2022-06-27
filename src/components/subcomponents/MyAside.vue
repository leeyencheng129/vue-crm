<template>
  <div class="aside-container">
    <ul>
      <li>
        <router-link to="/home/users">用戶管理</router-link>
      </li>
      <li>
        <router-link to="/home/rights">權限管理</router-link>
      </li>
      <li>
        <router-link to="/home/goods">商品管理</router-link>
      </li>
      <li>
        <router-link to="/home/orders">訂單管理</router-link>
      </li>
      <li>
        <router-link to="/home/setting">系統設置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.aside-container {
  width: 20%;
  border-right: 1px solid #ddd;
  ul {
    li {
      cursor: pointer;
      list-style: none;
      a {
        display: block;
        color: #111;
        text-decoration: none;
        padding: 3% 8%;
        &:hover {
          color: #111;
        }
      }
      &:hover {
        background: rgba(238, 238, 238, 0.514);
      }
    }
  }
}
</style>
