<script setup>
import { ref } from "vue";

const showLeft = ref(false);

const open = ref("open");

const btnContext = ref("买入开多");

const value = ref(1);

const upList = ref([
  {
    price: "20613.56",
    num: "6.16",
  },
  {
    price: "13613.36",
    num: "2.25",
  },
  {
    price: "11302.00",
    num: "1.3",
  },
  {
    price: "13642.57",
    num: "3.16",
  },
]);

const downList = ref([
  {
    price: "20613.56",
    num: "6.16",
  },
  {
    price: "13613.36",
    num: "2.25",
  },
  {
    price: "11302.00",
    num: "1.3",
  },
  {
    price: "13642.57",
    num: "3.16",
  },
]);

const perData = ref([
    {
        type:"BTC",
        time:"2022/10/23 19:50:03",
        open_price:"19462",
        profit:"+19.63",
        up:1
    },
    {
        type:"BTC",
        time:"2022/10/23 19:50:03",
        open_price:"19462",
        profit:"-19.63",
        up:0
    },
    {
        type:"BTC",
        time:"2022/10/23 19:50:03",
        open_price:"19462",
        profit:"+19.63",
        up:1
    },
])

const showPopup = () => {
  showLeft.value = true;
};

const buy = () => {
  open.value = "buy";
  btnContext.value = "买入开多";
};

const sell = () => {
  open.value = "sell";
  btnContext.value = "卖出开空";
};
</script>

<template>
  <div class="trade">
    <div class="header">
      <span>币币交易</span>
    </div>
    <div class="nav">
      <div>
        <van-popup
          v-model:show="showLeft"
          position="left"
          :style="{ width: '60%', height: '100%' }"
        />
        <span class="material-symbols-outlined recorder" @click="showPopup">
          reorder
        </span>
        <span>BTC/USDT</span>
      </div>
      <div>
        <span class="material-symbols-outlined"> finance </span>
      </div>
    </div>
    <div class="box">
      <div class="left">
        <div class="open">
          <button class="open_btn" @click="buy">买入</button>
          <button class="close" @click="sell">卖出</button>
        </div>
        <div class="lever">
          <span>杠杆</span>
          <van-stepper v-model="value" step="10" min="1" max="200" />
        </div>
        <div class="num">
          <span>数量</span>
          <input type="text" placeholder="0.000" />
          <span>USDT</span>
        </div>
        <div class="btn">
          <button :class="open == 'buy' ? 'open_btn' : 'sell'">
            {{ btnContext }}
          </button>
        </div>
      </div>
      <div class="right">
        <div class="title"><span>价格</span><span>数量</span></div>
        <div class="right_box">
          <div v-for="(item, index) in upList" :key="index" class="up">
            <span>{{ item.price }}</span
            ><span>{{ item.num }}</span>
          </div>
          <div>
            <span style="color: #e23e57; padding: 5px 0px; font-size: 18px"
              >2346.13</span
            >
          </div>
          <div v-for="(item, index) in downList" :key="index" class="down">
            <span>{{ item.price }}</span
            ><span>{{ item.num }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="position">
      <div class="top">
        <span class="position_top">持仓</span>
        <div>
          <span>查看全部</span
          ><span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
        </div>
      </div>
      <div class="per" v-for="(item,index) in perData" :key="index">
        <div>
            <span>种类</span>
            <span>{{item.type}}/USDT</span>
        </div>
        <div>
            <span>时间</span>
            <span>{{item.time}}</span>
        </div>
        <div>
            <span>开仓价格</span><span>{{item.open_price}}</span>
        </div>
        <div>
            <span>盈亏</span><span :class="item.up==1?'up':'down'">{{item.profit}}USDT</span>
        </div>
        <div>
            <button>止盈止损</button>
            <button>平仓</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      .recorder {
        padding-right: 5px;
      }
    }
  }
  .box {
    width: auto;
    height: 220px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    .left {
      width: 48%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .open {
        display: flex;
        justify-content: space-around;
        border-radius: 2px;
        overflow: hidden;
        button {
          width: 50%;
          height: 35px;
          border: 0;
          font-size: 13px;
          color: #fff;
        }
        .open_btn {
          background: #3aba99;
        }
        .close {
          background: #f85d59;
        }
      }
      .lever {
        width: auto;
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .van-stepper__input {
          width: 50%;
        }
        .van-stepper__plus {
          width: 25%;
        }
        .van-stepper__minus {
          width: 25%;
        }
      }
      .num {
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          width: 40%;
          height: 35px;
          padding-left: 20px;
          border: 0;
          background: #f5f5f5;
        }
      }
      .btn {
        width: auto;
        button {
          width: 100%;
          height: 35px;
          border: 0;
          color: #fff;
          border-radius: 2px;
          font-size: 13px;
        }
        .open_btn {
          background: #3aba99;
        }
        .sell {
          background: #f85d59;
        }
      }
    }
    .right {
      width: 48%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      box-sizing: border-box;
      .title {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        font-weight: 600;
        padding-inline: 5px 0px;
      }
      .right_box {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div {
          display: flex;
          justify-content: space-between;
          padding: 2px 15px;
          font-weight: 600;
        }
        .up {
          color: #3aba99;
        }
        .down {
          color: #f85d59;
        }
      }
    }
  }
  .position{
    width: auto;
    height: auto;
    padding: 10px 0px;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-bottom: 20px;
        .position_top{
            font-weight: 600;
            font-size: 15px;
        }
        div{
            display: flex;
            align-items: center;
            .arrow{
                font-size: 18px;
            }
        }
    }
    .per{
        font-size: 14px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin: 15px auto;
        background: #FFF;
        padding: 15px;
        border-radius: 3px;
        color: #333;
        font-weight: 600;
        div{
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;
            button{
                border: 0;
                width: 80px;
                padding: 5px;
                background: #355c7d;
                color: #fff;
                border-radius: 2px;
                font-size: 13px;
                font-weight: 500;
            }
            .up{
                color: #3aba99;
            }
            .down{
                color: #f85d59;
            }
        }
    }
  }
}
</style> 