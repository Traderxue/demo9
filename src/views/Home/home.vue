<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("涨幅榜");

const navList = ref([
  {
    type: "BTC",
    price: "9394.16",
    parcent: "-1.81%",
    price_cny: "6434.63",
    up: 1,
  },
  {
    type: "ETH",
    price: "1694.16",
    parcent: "-1.21%",
    price_cny: "1434.63",
    up: 0,
  },
  {
    type: "APE",
    price: "14.16",
    parcent: "-2.36%",
    price_cny: "3534.63",
    up: 0,
  },
]);

const titleList = ref([
  {
    title: "涨幅榜",
    path:"/increase"
  },
  {
    title: "成交额榜",
    path:"/deal"
  },
  {
    title: "新币榜",
    path:"/newcoin"
  },
]);

const showTop = ref(false);

const showLeft = ref(false);

const showLang = () => {
  showTop.value = true;
};

const showMenu = () => {
  showLeft.value = true;
};

const changeTitle = (item) => {
  router.push(item.path)
  active.value = item.title;
};

const quick = ()=>{
    router.push("/quick")
}

const kefu = ()=>{
  router.push("/kefu")
}
</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined" @click="showMenu"> menu </span>
      <van-popup
        v-model:show="showLeft"
        position="left"
        :style="{ width: '60%', height: '100%' }"
      >
        <div>123</div>
      </van-popup>

      <span>FVEX</span>
      <span class="material-symbols-outlined" @click="showLang">
        language
      </span>
      <van-popup
        v-model:show="showTop"
        position="top"
        :style="{ height: '30%' }"
      >
        <div>123</div>
      </van-popup>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner_1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner_2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner_3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#FFF"
        color="#333"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index">
        <span class="span1">{{ item.type }}/USDT</span>
        <span class="span2">{{ item.price }}</span>
        <span class="span3">{{ item.parcent }}</span>
        <span class="span4">≈{{ item.price_cny }}CNY</span>
      </div>
    </div>
    <div class="quickly">
      <div class="left" @click="quick">
        <h3>快捷买币</h3>
        <span>支持USDT、BTC等</span>
        <img src="@/assets/img_1.png" alt="" />
      </div>
      <div class="right">
        <div class="top" @click="quick">
          <img src="@/assets/img/img_1.png" alt="" />
          <span>快捷买币</span>
        </div>
        <div class="bottom" @click="kefu">
          <img src="@/assets/img/img_2.png" alt="" />
          <span>帮助中心</span>
        </div>
      </div>
    </div>
    <div class="title">
      <span
        v-for="(item, index) in titleList"
        :key="index"
        @click="changeTitle(item)"
        :class="active==item.title?'active':''"
        >{{ item.title }}</span
      >
    </div>
    <div class="box">
      <RouterView/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .banner {
    width: auto;
    height: 160px;
    margin: 20px 0px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 5px;
    }
  }
  .notice {
    margin: 10px 0px;
  }
  .nav {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 10px;
      span {
        padding: 3px 0px;
      }
      .span1 {
        font-weight: 600;
      }
      .span2 {
        font-weight: 600;
        color: #e30b52;
      }
      .span3 {
        font-weight: 600;
        color: #e30b52;
        font-size: 12px;
      }
      .span4 {
        font-weight: 600;
        color: #989898;
      }
    }
  }
  .quickly {
    display: flex;
    justify-content: space-between;
    height: 140px;
    margin: 20px 0px;
    font-size: 14px;
    .left {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;
      width: 60%;
      position: relative;
      img {
        position: absolute;
        width: 60px;
        height: 60px;
        right: 20px;
        top: 15px;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 36%;
      div {
        box-sizing: border-box;
        padding: 15px;
      }
      .top {
        height: 45%;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .bottom {
        height: 45%;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-around;
    padding: 10px 50px;
    font-weight: 600;
    .active {
      color: #2b7bfd;
    }
  }
}
</style>