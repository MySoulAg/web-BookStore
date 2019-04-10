<template>
  <div class="box">
    <div class="title">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox>
      <div class="inf">商品信息</div>
      <div class="unit-price">单价</div>
      <div class="nums">数量</div>
      <div class="subtotal">小计（元）</div>
      <div class="operation">操作</div>
    </div>
    <div class="car-box">
      <!-- 循环购物车中的商品 -->
      <div class="car" v-for="(item,index) in shopingCarArray" :key="index">

        <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.id">{{test}}</el-checkbox>
        </el-checkbox-group>


        
        <!-- <input type="checkbox" :value="item.id" v-model="checkedNames"> -->
        <div class="information">
          <div class="picture">
            <img :src="item.mainurl" alt="">
          </div>
          <div class="text">
            <span>{{item.bookname}} {{item.introd}}</span>
          </div>
        </div>
        <div class="unitprice">￥{{item.price.toFixed(2)}}</div>
        <div class="numbers">
          <el-input-number v-model="item.number" size="small" @change="handleChange" :min="1" :max="10"></el-input-number>
        </div>
        <div class="price">￥{{(item.price*item.number).toFixed(2)}}</div>
        <div class="delete">
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </div>  
    </div>
    <!-- 结算框 -->
    <div class="jieSuan">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox>
      
      <div class="alldelete">
        删除选中商品：<el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
      </div>
      <div class="selectNum">
        已选中<span style="color:red">15</span>件
      </div>
      <!-- 满99包邮，没满运费统一6元 -->
      <div class="yunfei">
        运费：￥6
      </div>
      <div class="allprice">
        总价（含运费）：<span style="color:red">￥</span><span style="color:red;font-size:25px;font-weight:bold">250.20</span>
      </div>
      <div class="jiesuanbotton">
        去结算
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopingCar",
  data() {
    return {
      // num1: 1,
      isIndeterminate: true,
      checkAll: false,
      test:null,
      checkList: [],
      checkedCities: [],
      checkedNames: [],
      shopingCarArray:[
        {
          id:12,
          mainurl:"http://img3m2.ddimg.cn/74/3/26920352-1_l_6.jpg",
          bookname:"我们仨",
          introd:"我们仨，都是最幸福的！",
          price:89.81,
          number:1,
        },
        {
          id:13,
          mainurl:"http://img3m3.ddimg.cn/73/25/26916193-2_u_2.jpg",
          bookname:"我们仨",
          introd:"我们仨，都是最幸福的！",
          price:15.8,
          number:1,

        },
        {
          id:14,
          mainurl:"http://img3m6.ddimg.cn/29/9/26913476-3_u_2.jpg",
          bookname:"我们仨",
          introd:"我们仨，都是最幸福的！",
          price:15.8,
          number:1,

        },
      ]
    };
  },
  // watch:{
  //   checkList:function(en){
  //     console.log(en);
  //   }
  // },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleCheckAllChange(val) {
        this.checkList = val ? [12,13,14] : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === 3;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  }
};
</script>
<style scoped>
.box {
  width: 1190px;
  margin: 0 auto;
}
.box .title {
  width: 100%;
  height: 32px;
  /* background-color: aqua; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  font-size: 12px;
  border: 1px solid #eee;
  border-top: 4px solid #eee;
}
.box .title .checkbox {
  margin-left: 55px;
}
.box .title .inf {
  margin-left: 100px;
}
.box .title .unit-price {
  margin-left: 225px;
}
.box .title .nums {
  margin-left: 175px;
}
.box .title .subtotal {
  margin-left: 158px;
}
.box .title .operation {
  margin-left: 103px;
}
.box .title div {
  color: #666;
}
.box .car-box {
  margin-top: 50px;
}
.box .car {
  width: 100%;
  height: 110px;
  border: 1px solid #eee;
  margin-top: -1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFBF2;
}
.box .car-box .car .information {
    display: flex;
    align-items: center;
    /* background-color: red; */
}
.box .car-box .car .picture {
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
  /* background-color: red; */
}
.box .car-box .car .picture img {
  width: 100%;
  height: 100%;
}
.box .car-box .car .text {
  font-size: 12px;
  width: 200px;
  height: 40px;
  /* background-color: aqua; */
  overflow: hidden;
  margin-left: 20px;
}
.box .car-box .car .unitprice {
  /* background-color: red; */
  width: 100px;
  text-align: center;
}
.box .car-box .car .price {
  font-weight: bold;
  /* background-color: red; */
  width: 100px;
  text-align: center;
}
.box .jieSuan {
  width: 100%;
  height: 60px;
  border: 1px solid #eee;
  margin-top: 50px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
}
.box .jieSuan .alldelete {
  margin-left: 105px;
}
.box .jieSuan .selectNum {
  margin-left: 200px;
} 
.box .jieSuan .yunfei {
  width: 150px;
  /* background-color: aqua; */
  margin-left: 100px;
}
.box .jieSuan .allprice {
  height: 100%;
  line-height: 55px;
  margin-left: 40px;
  /* background:chartreuse; */
}
.box .jieSuan .jiesuanbotton {
  height: 100%;
  width: 120px;
  background-color: red;
  color: #FFFBF2;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  position: absolute;
  right: 0;
}
</style>


