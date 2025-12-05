# 前后端分离Web应用Demo

## 项目简介

这是一个使用较老技术栈开发的前后端分离Web应用Demo，包含用户管理功能，支持用户的增删改查操作。

## 技术栈

### 后端
- **Java**: JDK 1.8
- **框架**: Spring Boot 2.2.13.RELEASE
- **ORM**: MyBatis 1.3.2
- **数据库**: MySQL
- **构建工具**: Maven
- **其他**: Lombok

### 前端
- **框架**: Vue 2.7.16
- **路由**: Vue Router 3.6.5
- **HTTP客户端**: Axios 1.13.2
- **构建工具**: Vue CLI 5.0.9

## 项目结构

```
.
├── backend/                 # 后端项目
│   ├── src/main/java/com/example/backend/
│   │   ├── controller/     # 控制器层
│   │   ├── entity/         # 实体类
│   │   ├── mapper/         # MyBatis映射接口
│   │   └── service/        # 业务逻辑层
│   ├── src/main/resources/
│   │   ├── mapper/         # MyBatis XML映射文件
│   │   └── application.properties  # 配置文件
│   └── pom.xml             # Maven依赖
├── frontend/               # 前端项目
│   ├── src/
│   │   ├── components/     # 组件
│   │   ├── views/          # 页面
│   │   ├── router/         # 路由配置
│   │   ├── axios.js        # Axios配置
│   │   ├── App.vue         # 根组件
│   │   └── main.js         # 入口文件
│   ├── vue.config.js       # Vue配置
│   └── package.json        # 依赖配置
└── README.md               # 项目说明
```

## 环境准备

1. **JDK 1.8**
   - 下载地址: [Oracle JDK 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
   - 或使用OpenJDK 8

2. **MySQL**
   - 版本: 5.7+ 或 8.0+
   - 下载地址: [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

3. **Node.js**
   - 版本: 14+ 或 16+（推荐16+）
   - 下载地址: [Node.js](https://nodejs.org/)

4. **Maven**
   - 版本: 3.6+（Spring Boot 2.2.x推荐）
   - 下载地址: [Apache Maven](https://maven.apache.org/download.cgi)

## 数据库配置

1. **创建数据库**
   ```sql
   CREATE DATABASE IF NOT EXISTS demo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. **创建用户表**
   ```sql
   USE demo;
   CREATE TABLE IF NOT EXISTS user (
       id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(50) NOT NULL,
       email VARCHAR(100) NOT NULL,
       phone VARCHAR(20),
       create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

3. **配置数据库连接**
   - 编辑 `backend/src/main/resources/application.properties`
   - 默认配置：
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai
     spring.datasource.username=root
     spring.datasource.password=root
     ```
   - 根据实际情况修改用户名和密码

## 启动方式

### 1. 启动后端服务

```bash
# 进入后端目录
cd backend

# 使用Maven启动Spring Boot应用
mvn spring-boot:run
```

- 服务将在 http://localhost:8080 启动
- API基础路径：http://localhost:8080/api

### 2. 启动前端服务

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run serve
```

- 服务将在 http://localhost:8081 启动
- 访问地址：http://localhost:8081

## 功能说明

### 1. 用户列表页
- 展示所有用户信息
- 支持分页（当前版本为简单实现，未添加分页）
- 提供查看、编辑、删除操作
- 支持添加新用户

### 2. 用户详情页
- 展示单个用户的详细信息
- 提供返回列表和编辑跳转功能

### 3. 用户编辑页
- 支持新增用户
- 支持编辑现有用户
- 包含表单验证

## API接口

| 方法 | 路径 | 功能 | 请求体 | 响应体 |
|------|------|------|--------|--------|
| GET | /api/users | 获取用户列表 | 无 | `[{"id": 1, "name": "张三", "email": "zhangsan@example.com", "phone": "13800138000", "createTime": "2023-01-01T00:00:00", "updateTime": "2023-01-01T00:00:00"}]` |
| GET | /api/users/{id} | 获取用户详情 | 无 | `{"id": 1, "name": "张三", "email": "zhangsan@example.com", "phone": "13800138000", "createTime": "2023-01-01T00:00:00", "updateTime": "2023-01-01T00:00:00"}` |
| POST | /api/users | 新增用户 | `{"name": "张三", "email": "zhangsan@example.com", "phone": "13800138000"}` | `{"id": 1, "name": "张三", "email": "zhangsan@example.com", "phone": "13800138000", "createTime": "2023-01-01T00:00:00", "updateTime": "2023-01-01T00:00:00"}` |
| PUT | /api/users/{id} | 更新用户 | `{"id": 1, "name": "张三", "email": "zhangsan@example.com", "phone": "13800138000"}` | 无 |
| DELETE | /api/users/{id} | 删除用户 | 无 | 无 |

## 开发说明

### 后端开发
- 实体类使用Lombok简化代码
- MyBatis映射文件放在`resources/mapper/`目录下
- 控制器使用`@RestController`注解，提供RESTful API
- 配置了跨域支持，允许来自http://localhost:8081的请求

### 前端开发
- 使用Vue 2.x语法
- 路由配置在`src/router/index.js`
- Axios配置在`src/axios.js`，包含基础URL和拦截器
- 组件化开发，每个页面对应一个组件

## 注意事项

1. 确保MySQL服务已启动
2. 首次运行需要创建数据库和表
3. 后端和前端端口分别为8080和8081，避免冲突
4. 后端使用的是Spring Boot 2.2.x，与较新版本的Spring Boot可能存在兼容性差异
5. 前端使用的是Vue 2.x，与Vue 3.x语法存在差异

## 构建生产版本

### 后端构建

```bash
cd backend
mvn clean package
```

构建后的jar文件将位于`backend/target/`目录下

### 前端构建

```bash
cd frontend
npm run build
```

构建后的静态文件将位于`frontend/dist/`目录下

## 许可证

MIT
