<template>
    <div class="box">
        <span>数量：</span>
        <el-input-number size="small" v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="max"></el-input-number>
        <span class="unit">册</span>
        <span class="kucun">库存</span><span>{{booknum}}册</span>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"BuyNum",
    data() {
      return {
        //默认选择数量
        num8: 1,
        //设置最大的选择量，最大选择量与库存相同
        max:0,
        //库存数量
        booknum:0,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    mounted:function(){
      /**
     * 发送ajax获取 库存
     */
    axios
      .get("http://localhost:8888/get-kucun", {
        params: {
          id: 12
        }
      })
      .then(response => {
        // console.log(response);
        this.booknum=response.data[0].kucun;
        //最大选择量与库存相同
        this.max=this.booknum;
      })
      .catch(error => {
        console.log(error);
      });
        
    }
}
</script>
<style scoped>
    .box {
        padding-left: 10px;
        font-size: 13px;
        color: #999;
        margin-top: 10px;
    }
    .box .unit {
        margin-left: 5px;
    }
    .box .kucun {
        margin-left: 30px;
    }
</style>


