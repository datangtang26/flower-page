<template>
  <div class="product">
    <ul class="product-list">
      <li class="product-list-item" v-for="(item, index) in productList" :key="index">
        <img :src="item.img" class="img">
        <div class="text">{{ item.text }}</div>
        <div class="buttons">
          <el-popover
            placement="bottom"
            width="200"
            trigger="click"
            :content="item.info">
            <el-button type="info" slot="reference">查看详情</el-button>
          </el-popover>
          <el-button class="item-button" type="success" @click="handleAdd">添加到购物车</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    }
  },
  created () {
    this.apiUrl = '//127.0.0.1:3000/getProduct';
    this.getProductList();
  },
  mounted () {},
  methods: {
    getProductList () {
      console.log('==========================');
      this.$http.get(this.apiUrl).then(res => {
        console.log(res);
        if (res && res.code == 0 && res.data) {
          const list = res.data.list || [];
          if (list.length > 0) {
            this.productList = list;
          }
        } 
      })
    },
    handleAdd () {
      alert('添加成功')
    }
  }
}
</script>

<style lang="less">
@import (reference) "../assets/reset.less";
.product {
  .product-list {
    .product-list-item {
      float: left;
      margin-right: 25px;
      width: 200px;
      list-style: none;
      .img {
        width: 200px;
        height: 200px;
      }
      .text {
        text-align: center;
      }
      .buttons {
        margin-top: 20px;
        display: flex;
        .item-button {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
