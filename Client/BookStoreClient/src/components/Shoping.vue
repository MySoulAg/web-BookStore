<template>
    <div class="box">
        <div class="shoping">立即购买</div>
        <router-link to="/ShopingCar" style="text-decoration: none"><div class="shpingCar">加入购物车</div></router-link>
    </div>
</template>
<script>
export default {
    name:"Shoping"
}
</script>
<style scoped>
    .box {
        height: 100px;
        /* background-color: aqua; */
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box .shoping {
        width: 180px;
        height: 40px;
        border: 1px solid red;
        box-sizing: border-box;
        background-color: #FFEDED;
        text-align: center;
        line-height: 40px;
        color: red;
    }
    .box .shpingCar {
        width: 180px;
        height: 40px;
        /* border: 1px solid red; */
        box-sizing: border-box;
        background-color: #FF0036;
        text-align: center;
        line-height: 40px;
        color: #fff;
        margin-left: 10px;
    }
</style>


