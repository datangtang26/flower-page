<template>
  <div id="app">
    <div class="header">花里</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">花里首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/join">花店加盟</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/product">花里产品</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/about">关于花里</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/order">在线订花</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/login">注册/登录</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link to="/admin">管理员</router-link>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
@import (reference) "./assets/reset.less";
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;
  background: #e3e3e3;
}
.header {
  width: 100%;
  height: 80px;
  background: #ccc;
}
.el-menu {
  li {
    a {
      text-decoration: none;
    }
  }
}
</style>
