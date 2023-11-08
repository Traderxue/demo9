<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { init, dispose } from "klinecharts";
import KLineData from "@/data/kline.js";

const router = useRouter();
const route = useRoute()

const active = ref("1M");

const goBack = () => {
  router.back();
};

let chart;

onMounted(() => {
    console.log(route.query)
  chart = init("chart");

  chart.applyNewData(KLineData[0].data);

  chart.createIndicator("VOL");
});

const setChartType = () => {
  chart.setStyles({
    candle: {
      type: "area",
    },
  });
};

const changeTime = (item) => {
  active.value = item.time;
  chart.applyNewData(item.data);
};

const setCandle = () => {
  chart.setStyles({
    candle: {
      type: "candle_solid",
    },
  });
};

const trade = () =>{
    router.push("/trade")
}

const optional = ()=>{

}
</script>

<template>
  <div class="chart">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>{{route.query.type}}/USDT</span>
      <span></span>
    </div>
    <div class="banner">
      <div>
        <h3 :class="route.query.up=='1'?'up':'down'">{{route.query.price}}</h3>
        <span :class="route.query.up=='1'?'up':'down'">{{route.query.parcent}}</span>
      </div>
      <div>
        <span>24H最高</span>
        <span>24H最低</span>
        <span>24H成交</span>
      </div>
      <div>
        <span>26944</span>
        <span>25946</span>
        <span>1644</span>
      </div>
    </div>
    <div class="time">
      <span
        v-for="(item, index) in KLineData"
        :key="index"
        @click="changeTime(item)"
        :class="active == item.time ? 'active' : ''"
        >{{ item.time }}</span
      >
      <span class="material-symbols-outlined" @click="setChartType">
        earthquake
      </span>
      <span class="material-symbols-outlined" @click="setCandle">
        candlestick_chart
      </span>
    </div>
    <div
      class="chart"
      id="chart"
      style="width: 100%; height: 500px; box-sizing: border-box"
    ></div>
    <div class="btn">
      <button>
        <span class="material-symbols-outlined currency" @click="trade"> currency_exchange </span>交易
      </button>
      <button>
        <span class="material-symbols-outlined add" @click="optional"> add </span>加入自选
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      font-size: 22px;
    }
  }
  .banner {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    color: #666;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      h3 {
        font-size: 18px;
      }
      span {
        padding: 3px 0px;
      }
    }
    .down{
        color: #f9293e;
    }
    .up{
        color: #2DC08E;
    }
  }
  .time {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0px;
    .active {
      color: #3582ff;
    }
  }
  .btn{
    width: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    button{
        height: 35px;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: #1677FF;
        border-radius: 3px;
        color: #FFF;
        font-weight: 500;
        .currency{
            padding-right: 5px;
            font-size: 18px;
        }
        .add{
            padding-right: 5px;
            font-size: 18px;
        }
    }
  }
}
</style>