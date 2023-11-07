<script setup>
import { ref } from "vue";

const listData = ref([
  {
    type: "USDT",
    avaliable: "0.000",
    freeze: "0.000",
    convert: "0.000",
  },
  {
    type: "USDT",
    avaliable: "0.000",
    freeze: "0.000",
    convert: "0.000",
  },
  {
    type: "USDT",
    avaliable: "0.000",
    freeze: "0.000",
    convert: "0.000",
  },
  {
    type: "USDT",
    avaliable: "0.000",
    freeze: "0.000",
    convert: "0.000",
  },
  {
    type: "USDT",
    avaliable: "0.000",
    freeze: "0.000",
    convert: "0.000",
  },
]);
</script>

<template>
  <div class="assets">
    <div class="per" v-for="(item,index) in listData" :key="index">
      <div>
        <span style="color: #E1B752;font-weight: 600;">{{item.type}}</span>
      </div>
      <div>
        <span>可用</span><span style="text-align: center">冻结</span
        ><span style="text-align: right;">折合($)</span>
      </div>
      <div>
        <span>{{item.avaliable}}</span><span style="text-align: center">{{item.freeze}}</span
        ><span style="text-align: right;">{{item.convert}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.assets {
  width: auto;
  height: auto;
  padding: 15px;
  .per {
    margin: 15px 0px;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #FFF;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0px;
      span {
        width: 33%;
      }
    }
  }
}
</style>