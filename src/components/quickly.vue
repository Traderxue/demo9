<script setup>
import { ref,computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const input1 = ref("")
const input2 = ref("")

const usdt_num = computed(()=>{
    return (input1.value/6.5).toFixed(2)
})

const sell_num = computed(()=>{
    return (input2.value/6.5).toFixed(2)
})

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="invite">
    <div class="position">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack">
          arrow_back_ios
        </span>
        <span>快捷买币</span><span></span>
      </div>
      <div class="box">
        <van-tabs v-model:active="active" title-active-color="#1989FA">
          <van-tab title="买入">
            <div class="buy">
                <div> 
                    <span>金额</span>
                    <span class="right">
                        <input type="text" placeholder="0.000" v-model="input1">
                        <span>CNY</span>
                    </span>                    
                </div>
                <div>
                    <span>支付方式</span>
                    <select name="" id="type">
                        <option value="zfb">支付宝</option>
                        <option value="wx">微信</option>
                        <option value="ynk">银行卡</option>
                    </select>
                </div>
                <div>
                    <span>交易数量</span>
                    <span>{{usdt_num}} USDT</span>
                </div>
                <div>
                    <span>备注</span>
                    <span style="text-align: right;"><input type="text" placeholder="无" style="text-align: right;"></span>
                </div>
                <div>
                    <button>买入</button>
                </div>
            </div>
          </van-tab>
          <van-tab title="卖出">
            <div class="buy">
                <div> 
                    <span>金额</span>
                    <span class="right">
                        <input type="text" placeholder="0.000" v-model="input2">
                        <span>CNY</span>
                    </span>                    
                </div>
                <div>
                    <span>收款方式</span>
                    <select name="" id="type">
                        <option value="zfb">支付宝</option>
                        <option value="wx">微信</option>
                        <option value="ynk">银行卡</option>
                    </select>
                </div>
                <div>
                    <span>出售数量</span>
                    <span>{{sell_num}} USDT</span>
                </div>
                <div>
                    <span>备注</span>
                    <span style="text-align: right;"><input type="text" placeholder="无" style="text-align: right;"></span>
                </div>
                <div>
                    <button>卖出</button>
                </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invite {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
  }
  .box{
    margin-top: 15px;
    background: #FFF;
    padding: 20px;
    .buy{
        padding: 15px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 15px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            input{
                padding-left: 10px;
                width: 30%;
                height: 35px;
                border: 0;
                color: #666;
            }
            .right{
                text-align: right;
            }
            select{
                border: 0;
                outline: none;
                width: 30%;
            }
            button{
                margin: 0 auto;
                width: 60%;
                height: 30px;
                border: 0;
                color: #FFF;
                background: #364f6b;
                border-radius: 3px;
            }
        }
    }
    .sell{
        padding:15px;
    }
  }
}
</style>