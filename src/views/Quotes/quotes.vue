<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("币币")

const navData = ref([
  {
    title: "币币",
    path: "/coins",
  },
  {
    title: "合约",
    path: "/contract",
  },
]);

const changeTab = (item) =>{
    active.value = item.title
    router.push(item.path)
}

</script>

<template>
  <div class="quotes">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="banner">
      <span v-for="(item, index) in navData" :key="index" :class="active==item.title?'active':''" @click="changeTab(item)">{{
        item.title
      }}</span>
    </div>
    <div class="box">
        <RouterView/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quotes {
  width: auto;
  height: auto;
  padding: 15px;
  color: #333;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
  }
  .banner {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 60px;
    font-weight: 600;
    .active{
        color: #1A89EE;
    }
  }
}
</style>