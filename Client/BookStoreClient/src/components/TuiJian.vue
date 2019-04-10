<template>
  <div class="xixi">
    <div class="box" v-for="(item,index) in TuiJianBookArray" :key="index">
      <img :src="item.mainurl" alt>
      <p class="price">￥{{item.price}}</p>
      <p class="bookname">《{{item.bookname}}》</p>
    </div>
    <el-button size="mini"  type="primary" @click="click" class="button">换一批</el-button> 
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TuiJian",
  data: function() {
    return {
      //用来装推荐图书的数组
      TuiJianBookArray: [],
    };
  },
  methods: {
    //发送ajax的函数
    sendajax:function() {
      /**
       * 发送ajax获取 推荐图书
       */
      axios
        .get("http://localhost:8888/get-tuijian", {
          params: {
            //根据当前的类推荐
            cid: 4
          }
        })
        .then(response => {
          //将获取的随机3本书设置在数组里面
          this.TuiJianBookArray = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    click:function(){
      //点击按钮时，换一批同类型的书籍
      this.sendajax();
    }
  },
  mounted: function() {
    //调用发送ajax函数
    this.sendajax();
  }
};
</script>
<style scoped>
p {
  margin: 0;
}
.xixi {
  display: flex;
  flex-direction: column;
}
.box {
  width: 200px;
  margin-top: 10px;
  /* height: 200px; */
  /* background: aquamarine; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box img {
  width: 150px;
  height: 150px;
}
.box .price {
  font-size: 14px;
  color: red;
}
.box .bookname {
  font-size: 15px;
}
.button {
  margin-top: 10px;
}
</style>


