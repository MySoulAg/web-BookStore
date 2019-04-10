<template>
  <div class="boxBuy">
    <my-fangdajing></my-fangdajing>
    <div class="left">
      <my-booknamedescribe></my-booknamedescribe>
      <my-author></my-author>
      <my-price></my-price>
      <my-sales></my-sales>
      <my-buynum></my-buynum>
      <my-shoping></my-shoping>
    </div>
    <div class="tuijian-box">
      <div class="tuijian">
        <p>········推荐图书········</p>
        <my-tuijian></my-tuijian>
      </div>
    </div>
  </div>
</template>
<script>
import FangDaJing from "./FangDaJing";
import BooknameDescribe from "./BooknameDescribe";
import Author from "./Author";
import Price from "./Price";
import Sales from "./Sales";
import BuyNum from "./BuyNum";
import Shoping from "./Shoping";
import TuiJian from "./TuiJian";

export default {
  name: "Buy",
  components: {
    "my-fangdajing": FangDaJing,
    "my-booknamedescribe": BooknameDescribe,
    "my-author": Author,
    "my-price": Price,
    "my-sales": Sales,
    "my-buynum": BuyNum,
    "my-shoping": Shoping,
    "my-tuijian": TuiJian
  }
};
</script>
<style scoped>
.boxBuy {
  display: flex;
  /* background-color: red; */
  width: 1200px;
  margin: 0 auto;
}
.left {
  width: 520px;
  /* background-color: rebeccapurple; */
}
.tuijian-box {
  margin-left: 30px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
}
.tuijian {
  border: 1px solid #eee;
  padding: 10px 0px 0px 0px;
  border-radius: 0 0 5px 5px;
}
.tuijian p {
  margin: 0;
  font-size: 14px;
  color: #999;
  text-align: center;
}
.button {
  margin: 10px auto;
}
</style>


