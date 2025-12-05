<template>
  <div class="user-edit">
    <h2>{{ isEdit ? '编辑用户' : '新增用户' }}</h2>
    <div class="action-bar">
      <router-link to="/" class="btn back-btn">返回列表</router-link>
    </div>
    <div class="edit-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="form.name" required placeholder="请输入姓名">
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="form.email" required placeholder="请输入邮箱">
        </div>
        <div class="form-group">
          <label for="phone">电话</label>
          <input type="tel" id="phone" v-model="form.phone" placeholder="请输入电话">
        </div>
        <div class="form-actions">
          <button type="submit" class="btn submit-btn">{{ isEdit ? '更新' : '保存' }}</button>
          <router-link to="/" class="btn cancel-btn">取消</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios'

export default {
  name: 'UserEdit',
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    isEdit() {
      return this.id !== null
    }
  },
  mounted() {
    if (this.isEdit) {
      this.fetchUserDetail()
    }
  },
  methods: {
    fetchUserDetail() {
      axios.get(`/users/${this.id}`)
        .then(response => {
          this.form = {
            name: response.name,
            email: response.email,
            phone: response.phone
          }
        })
        .catch(error => {
          console.error('获取用户详情失败:', error)
        })
    },
    submitForm() {
      if (this.isEdit) {
        this.updateUser()
      } else {
        this.createUser()
      }
    },
    createUser() {
      axios.post('/users', this.form)
        .then(() => {
          alert('用户创建成功')
          this.$router.push('/')
        })
        .catch(error => {
          console.error('创建用户失败:', error)
          alert('创建用户失败')
        })
    },
    updateUser() {
      // 将id包含在请求体中
      const updateData = {
        ...this.form,
        id: this.id
      }
      axios.put(`/users/${this.id}`, updateData)
        .then(() => {
          alert('用户更新成功')
          this.$router.push(`/users/${this.id}`)
        })
        .catch(error => {
          console.error('更新用户失败:', error)
          alert('更新用户失败')
        })
    }
  }
}
</script>

<style scoped>
.user-edit {
  max-width: 600px;
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

.edit-form {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #666;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-actions {
  margin-top: 20px;
  text-align: right;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #333;
}

.btn:hover {
  opacity: 0.8;
}
</style>