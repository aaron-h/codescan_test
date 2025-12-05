<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <h1 class="logo"><router-link to="/">用户管理系统</router-link></h1>
      </div>
    </nav>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  min-height: 100vh;
}

.navbar {
  background-color: #3498db;
  color: white;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  margin: 0;
}

.logo a {
  color: white;
  text-decoration: none;
}

main {
  padding: 20px 0;
  min-height: calc(100vh - 60px);
}
</style>
