<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const listData = ref([
    {
        type:"APE",
        price:"1.17",
        parcent:"+1.35%",
        up:1
    },
    {
        type:"ETH",
        price:"1644",
        parcent:"+0.36%",
        up:0
    },
    {
        type:"APE",
        price:"1.17",
        parcent:"+1.35%",
        up:1
    }
])

</script>

<template>
    <div class="deal">
        <div class="title">
            <span>种类</span><span style="text-align: center;">价格</span><span style="text-align: right;">涨跌幅</span>
        </div>
        <div class="per" v-for="(item,index) in listData" :key="index">
            <div style="text-align: left;"><span>{{item.type}}</span><p>/USDT</p></div>
            <div style="text-align: center;"><span :class="item.up==1?'up_price':'down_price'">{{item.price}}</span></div>
            <div><button :class="item.up==1?'up':'down'">{{item.parcent}}</button></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.deal{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        padding: 10px 0px;
        span{
            width: 33%;
        }
    }
    .per{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        padding: 10px 0px;
        div{
            display: flex;
            justify-content: space-around;
            button{
                width: 70px;
                height: 35px;
                border: 0;
                color: #FFF;
                font-size: 13px;
                border-radius: 2px;
            }
            .up_price{
                color: #39BB97;
            }
            .down_price{
                color: #F85D59;
            }
            .up{
                background: #39BB97;
            }
            .down{
                background: #F85D59;
            }
        }
    }
}
</style>