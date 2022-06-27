<template>
  <div class="users-container">
    <h2>用戶管理</h2>
    <table id="customers">
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>年齡</th>
        <th>職稱</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in userlist" :key="item.id">
         <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.position}}</td>
        <td><a href="#" @click.prevent="gotoDetail(item.id)">詳情</a></td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userlist: [
        { id: 1, name: 'alxe', age: 30, position: 'doorman' },
        { id: 2, name: 'merry', age: 24, position: 'driver' },
        { id: 3, name: 'jason', age: 30, position: 'police' },
        { id: 4, name: 'sam', age: 30, position: 'doctor' }
      ]
    }
  },
  methods: {
    gotoDetail (id) {
      console.log('ok')
      this.$router.push('/home/userinfo/' + id)
    }
  }

}
</script>

<style lang="scss" scoped>
.users-container {
  width: 100%;
  h2{
    text-align: center;
    line-height: 2;
  }
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #d82c65;
    color: white;
  }
}
</style>
