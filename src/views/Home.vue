<template>
  <div class="home">
    <el-carousel class="home-banner" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" class="banner-img">
      </el-carousel-item>
    </el-carousel>
    <h1 class="title"> welcome to 花里！！</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      bannerList: [
        'https://pic1.58cdn.com.cn/gongyu/n_v2db498c66763e46aaa19ff0082ce7d7ea_a24c3b9cf8bad669.jpg',
        'https://pic1.58cdn.com.cn/gongyu/n_v29ef7020556e14515a50a072d8a8d41db_2b92315295339f63.jpg',
        'https://pic1.58cdn.com.cn/gongyu/n_v20c47657a4e274bafab561513d28bc684_517fdc991eafbfff.jpg',
        'https://pic1.58cdn.com.cn/gongyu/n_v214d80d1ad1c94060b72a3ee2e0de4aa5_e1b954c19c6e0b65.jpg',
        'https://pic1.58cdn.com.cn/gongyu/n_v2a2918c5b3a954d5e92f7048d2c70f14e_4031c7367bdd54ef.png'
      ]
    }
  }
}
</script>

<style lang="less">
@import (reference) "../assets/reset.less";

.home {
  .home-banner {
    margin: 20px;
    .banner-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
