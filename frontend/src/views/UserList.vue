<template>
  <div class="user-list">
    <h2>用户列表</h2>
    <div class="action-bar">
      <router-link to="/users/edit" class="add-btn">添加用户</router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>邮箱</th>
          <th>电话</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ formatDate(user.createTime) }}</td>
          <td>
            <router-link :to="`/users/${user.id}`" class="btn view-btn">查看</router-link>
            <router-link :to="`/users/edit/${user.id}`" class="btn edit-btn">编辑</router-link>
            <button @click="deleteUser(user.id)" class="btn delete-btn">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '../axios'

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios.get('/users')
        .then(response => {
          this.users = response
        })
        .catch(error => {
          console.error('获取用户列表失败:', error)
        })
    },
    deleteUser(id) {
      if (confirm('确定要删除这个用户吗？')) {
        axios.delete(`/users/${id}`)
          .then(() => {
            this.fetchUsers()
            alert('删除成功')
          })
          .catch(error => {
            console.error('删除用户失败:', error)
            alert('删除失败')
          })
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleString()
    }
  }
}
</script>

<style scoped>
.user-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.action-bar {
  margin-bottom: 20px;
  text-align: right;
}

.add-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.add-btn:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

.btn {
  padding: 6px 12px;
  margin-right: 5px;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.view-btn {
  background-color: #2196F3;
  color: white;
}

.edit-btn {
  background-color: #FFC107;
  color: white;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>