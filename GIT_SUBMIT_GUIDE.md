# 代码提交指南

由于当前环境限制（需要管理员权限同意Xcode许可证），无法直接执行git命令。请按照以下步骤手动提交代码到GitHub仓库。

## 前提条件

1. 确保已安装git
2. 已配置GitHub账号
3. 注意：根据系统提示，仓库 https://github.com/aaron-h/codescan_test 可能不存在，需要先创建仓库

## 步骤0：创建GitHub仓库（如果仓库不存在）

1. 登录GitHub账号
2. 点击右上角的"+"号，选择"New repository"
3. 在"Repository name"中输入"codescan_test"
4. 选择仓库类型（公开或私有）
5. 点击"Create repository"按钮
6. 仓库创建成功后，继续执行后续步骤

## 操作步骤

### 1. 打开终端

在Mac上，可以通过Spotlight搜索"终端"或在Launchpad中找到终端应用。

### 2. 导航到项目根目录

```bash
cd /Users/2089682/Documents/Workspace/oldversioncode
```

### 3. 初始化git仓库

```bash
git init
```

### 4. 添加远程仓库

```bash
git remote add origin https://github.com/aaron-h/codescan_test.git
```

### 5. 创建.gitignore文件

创建一个.gitignore文件来忽略不必要的文件：

```bash
cat > .gitignore << EOF
# 后端忽略文件
backend/target/
backend/.idea/
backend/.mvn/
backend/mvnw
backend/mvnw.cmd

# 前端忽略文件
frontend/node_modules/
frontend/dist/
frontend/.idea/
frontend/.env.local
frontend/.env.*.local

# 系统文件
.DS_Store
*.log
*.swp
EOF
```

### 6. 查看当前目录结构

```bash
ls -la
```

确认所有必要文件都已包含，不必要的文件已被.gitignore忽略。

### 7. 添加所有文件到暂存区

```bash
git add .
```

### 8. 提交代码

```bash
git commit -m "初始化前后端分离Web应用Demo"
```

### 9. 推送到远程仓库

```bash
git push -u origin main
```

## 可能遇到的问题及解决方案

### 1. 权限问题

如果遇到权限错误，确保：
- 您的GitHub账号有权限访问该仓库
- 已配置正确的git凭证（用户名和密码或SSH密钥）

### 2. 分支名称问题

如果远程仓库的默认分支不是main，而是master，可以使用：

```bash
git push -u origin master
```

### 3. 首次推送需要身份验证

首次推送可能需要输入GitHub用户名和密码，或使用个人访问令牌（PAT）。

### 4. 本地分支与远程分支不一致

如果远程仓库已有代码，需要先拉取最新代码：

```bash
git pull origin main --allow-unrelated-histories
```

## 验证提交

提交完成后，可以通过以下方式验证：

1. 访问GitHub仓库：https://github.com/aaron-h/codescan_test
2. 检查是否有新的提交记录
3. 确认所有文件都已正确上传

## 项目说明

已完成的项目包含：
- 后端：Spring Boot 2.2.13.RELEASE + MyBatis 1.3.2
- 前端：Vue 2.7.16 + Vue Router 3.6.5
- 用户管理功能：增删改查
- 完整的README.md文档

按照上述步骤操作，您可以成功将代码提交到GitHub仓库。