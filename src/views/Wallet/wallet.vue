<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const iconEye = ref(true);

const active = ref("资产");

const navList = ref([
  {
    title: "资产",
    path: "/assets",
  },
  {
    title: "理财",
    path: "/financial",
  },
  {
    title: "挖矿",
    path: "/mining",
  },
]);

const dataList = ref([
  {
    logo:"http://127.0.0.1:5173/chongzhi.png",
    title:"充值",
    path:"/chongzhi"
  },
  {
    logo:"http://127.0.0.1:5173/tixian.png",
    title:"提现",
    path:"/tixian"
  },
  {
    logo:"http://127.0.0.1:5173/huazhan.png",
    title:"划转",
    path:"/huazhuan"
  },
])


const usdt_assets = computed(() => {
  if (iconEye.value) return "1634.13";
  return "***";
});

const cny_assets = computed(() => {
  if (iconEye.value) return "4625.13";
  return "***";
});

const showAssets = () => {
  iconEye.value = !iconEye.value;
};

const changeTabs = (item) => {
  active.value = item.title;
  router.push(item.path);
};

const goTabs = (item) =>{
  router.push(item.path)
}
</script>

<template>
  <div class="wallet">
    <div class="header">
      <span>资产</span>
    </div>
    <div class="banner">
      <div>
        <span>总资产折合</span>
        <div @click="showAssets">
          <span class="material-symbols-outlined visible" v-if="iconEye">
            visibility
          </span>
          <span class="material-symbols-outlined visible" v-else>
            visibility_off
          </span>
        </div>
      </div>
      <h3>{{ usdt_assets }} USDT</h3>
      <span>{{ cny_assets }} CNY</span>
    </div>
    <div class="nav">
      <div v-for="(item,index) in dataList" :key="index" @click="goTabs(item)"> 
        <img :src="item.logo" alt="" />
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span
          v-for="(item, index) in navList"
          :key="index"
          @click="changeTabs(item)"
          :class="active == item.title?'active':''"
          >{{ item.title }}</span
        >
      </div>
      <div class="main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
  }
  .banner {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0px;
    div {
      display: flex;
      align-items: center;
      .visible {
        font-size: 18px;
        margin-left: 10px;
      }
    }
    h3 {
      padding: 10px 0px;
      font-size: 20px;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .box {
    margin: 20px 0px;
    .title {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0px 40px;
      span{
        padding-bottom: 5px;
      }
      .active{
        color: #347BF7;
        border-bottom: 2px solid #347BF7;
        font-weight: 600;
      }
    }
  }
}
</style>