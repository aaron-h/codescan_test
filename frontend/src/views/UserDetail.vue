<template>
  <div class="user-detail">
    <h2>用户详情</h2>
    <div class="action-bar">
      <router-link to="/" class="btn back-btn">返回列表</router-link>
      <router-link :to="`/users/edit/${user.id}`" class="btn edit-btn">编辑用户</router-link>
    </div>
    <div class="detail-card" v-if="user">
      <div class="detail-item">
        <label>ID:</label>
        <span>{{ user.id }}</span>
      </div>
      <div class="detail-item">
        <label>姓名:</label>
        <span>{{ user.name }}</span>
      </div>
      <div class="detail-item">
        <label>邮箱:</label>
        <span>{{ user.email }}</span>
      </div>
      <div class="detail-item">
        <label>电话:</label>
        <span>{{ user.phone }}</span>
      </div>
      <div class="detail-item">
        <label>创建时间:</label>
        <span>{{ formatDate(user.createTime) }}</span>
      </div>
      <div class="detail-item">
        <label>更新时间:</label>
        <span>{{ formatDate(user.updateTime) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios'

export default {
  name: 'UserDetail',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: null
    }
  },
  mounted() {
    this.fetchUserDetail()
  },
  methods: {
    fetchUserDetail() {
      axios.get(`/users/${this.id}`)
        .then(response => {
          this.user = response
        })
        .catch(error => {
          console.error('获取用户详情失败:', error)
        })
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleString()
    }
  }
}
</script>

<style scoped>
.user-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.action-bar {
  margin-bottom: 20px;
}

.btn {
  padding: 8px 16px;
  margin-right: 10px;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.back-btn {
  background-color: #f0f0f0;
  color: #333;
}

.edit-btn {
  background-color: #FFC107;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}

.detail-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.detail-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.detail-item label {
  width: 120px;
  font-weight: bold;
  color: #666;
}

.detail-item span {
  flex: 1;
  color: #333;
}
</style>