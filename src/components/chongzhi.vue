<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useClipboard from "vue-clipboard3";
import { showToast } from "vant";

const router = useRouter();

const { toClipboard } = useClipboard();

const active = ref(0);

const address = ref("TTcQoDLwNcJ547qGxvSvrK1kBikhWStXBW");

const ercAdd = ref({
  address:"0xd99ac0681b904991169a4f398B9043781ADbe0C3",
  ewm:"http://127.0.0.1:5173/ewm.png"
})

const trcAdd = ref({
  address:"TTcQoDLwNcJ547qGxvSvrK1kBikhWStXBW",
  ewm:"http://127.0.0.1:5173/ewm_1.png"
})

const bscAdd = ref({
  address:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",
  ewm:"http://127.0.0.1:5173/ewm_2.png"
})

const goBack = () => {
  router.back();
};

const copyInviteAddress = async (item) => {
  await toClipboard(item.address);
  showToast("复制成功");
};

const copyErc = async () =>{
  await toClipboard(ercAdd.value.address);
  showToast("复制成功")
}

const copyTrc = async () =>{
  await toClipboard(ercAdd.value.address);
  showToast("复制成功")
}

const copyBsc = async () =>{
  await toClipboard(ercAdd.value.address);
  showToast("复制成功")
}
</script>

<template>
  <div class="chongzhi">
    <div class="top">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back_ios
      </span>
      <span>充值</span><span></span>
    </div>
    <div class="box">
      <van-tabs v-model:active="active" title-active-color="#1989FA">
        <van-tab title="ERC20">
          <div class="erc">
            <img :src="ercAdd.ewm" alt="">
            <span>{{ercAdd.address}}</span>
            <button @click="copyErc">复制地址</button>
          </div> 
        </van-tab>
        <van-tab title="TRC20">
          <div class="erc">
            <img :src="trcAdd.ewm" alt="">
            <span>{{trcAdd.address}}</span>
            <button @click="copyTrc">复制地址</button>
          </div>
        </van-tab>
        <van-tab title="BSC20">
          <div class="erc">
            <img :src="bscAdd.ewm" alt="">
            <span>{{bscAdd.address}}</span>
            <button @click="copyBsc">复制地址</button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chongzhi {
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
    padding: 20px 0px;
    .erc{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background: #fff;
      padding: 35px 0px;
      img{
        width: 230px;
        height: 230px;
      }
      span{
        padding: 20px 2px;
        font-size: 14px;
      }
      button{
        margin: 10px 0px;        
        width: 40%;
        height: 35px;
        border-radius: 3px;
        border: 0;
        padding: 5px;
        background: #364f6b;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>