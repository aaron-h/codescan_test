# 前后端分离Web应用开发计划

## 技术栈
- **后端**: JDK 1.8, Spring Boot 2.2.x, MyBatis 1.x, MySQL, Lombok
- **前端**: Vue 2.x, Vue Router, Axios

## 项目结构
### 后端 (backend/)
```
├── src/main/java/com/example/backend/
│   ├── BackendApplication.java       # 启动类
│   ├── controller/                   # 控制器层
│   ├── entity/                       # 实体类
│   ├── mapper/                       # MyBatis映射
│   └── service/                      # 业务逻辑层
├── src/main/resources/
│   ├── application.properties        # 配置文件
│   └── mapper/                       # MyBatis XML映射文件
└── pom.xml                           # Maven依赖
```

### 前端 (frontend/)
```
├── src/
│   ├── components/                   # 组件
│   ├── views/                        # 页面
│   ├── router/                       # 路由配置
│   ├── axios.js                      # Axios配置
│   ├── App.vue                       # 根组件
│   └── main.js                       # 入口文件
└── package.json                      # 依赖配置
```

## 功能模块
1. **用户列表页**：展示用户信息，支持分页
2. **用户详情页**：查看单个用户详细信息
3. **用户编辑页**：新增/编辑用户信息

## 数据库设计
```sql
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 实现步骤

### 1. 后端开发
1. 编写pom.xml，添加所需依赖
2. 配置application.properties（数据库连接、MyBatis等）
3. 创建User实体类
4. 编写UserMapper接口和XML映射文件
5. 实现UserService业务逻辑
6. 编写UserController，提供RESTful API
7. 配置跨域支持

### 2. 前端开发
1. 配置Vue Router路由
2. 配置Axios拦截器
3. 实现用户列表组件
4. 实现用户详情组件
5. 实现用户编辑组件
6. 集成所有组件到App.vue

## 接口设计
| 方法 | 路径 | 功能 |
|------|------|------|
| GET | /api/users | 获取用户列表 |
| GET | /api/users/{id} | 获取用户详情 |
| POST | /api/users | 新增用户 |
| PUT | /api/users/{id} | 更新用户 |
| DELETE | /api/users/{id} | 删除用户 |

## 开发顺序
1. 先完成后端基础架构和API开发
2. 然后开发前端页面和组件
3. 最后进行前后端联调测试

## 预期效果
- 实现用户的增删改查功能
- 页面美观，交互流畅
- 前后端分离，便于维护和扩展