<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const perData = ref([
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "-19.63",
    up: 0,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "-19.63",
    up: 0,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
]);

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="all">
    <div class="position">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
        <span>全部仓位</span><span></span>
      </div>
      <div class="per" v-for="(item, index) in perData" :key="index">
        <div>
          <span>种类</span>
          <span>{{ item.type }}/USDT</span>
        </div>
        <div>
          <span>时间</span>
          <span>{{ item.time }}</span>
        </div>
        <div>
          <span>开仓价格</span><span>{{ item.open_price }}</span>
        </div>
        <div>
          <span>盈亏</span
          ><span :class="item.up == 1 ? 'up' : 'down'"
            >{{ item.profit }}USDT</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.position {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    background: #FFF;
  }
  .per {
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 15px auto;
    background: #fff;
    padding: 15px;
    border-radius: 3px;
    color: #333;
    font-weight: 600;
    div {
      display: flex;
      justify-content: space-between;
      padding: 5px 0px;
      .up {
        color: #3aba99;
      }
      .down {
        color: #f85d59;
      }
    }
  }
}
</style>