<script setup>
import { ref } from "vue";

const listData = ref([
    {
        grade:"VIP1",
        amount:"0-1000",
        income:"0.5%"
    },
    {
        grade:"VIP2",
        amount:"1000-2000",
        income:"0.7%"
    },
    {
        grade:"VIP3",
        amount:"2000-4000",
        income:"1%"
    },
    {
        grade:"VIP4",
        amount:"4000-6000",
        income:"1.5%"
    },
    {
        grade:"VIP5",
        amount:"6000-10000",
        income:"2%"
    },
])
</script>

<template>
    <div class="financial">
        <div class="header">
            <span>等级</span><span>金额</span><span>收益/周</span>
        </div>
        <div class="box">
            <div class="per" v-for="(item,index) in listData" :key="index">
                <span>{{item.grade}}</span><span>{{item.amount}} USDT</span><span>{{item.income}}</span>
            </div>
            <div class="contract">
                <span>如果您有任何问题，请联系我们的<a>在线客服.</a></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.financial{
    width: auto;
    height: auto;
    padding: 15px;
    .header{
        width: auto;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
    }
    .box{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .per{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            padding: 10px 0px;
            margin: 10px 0px;
            border-bottom: 1px solid rgba(220, 220, 220,0.5);
        }
        .contract{
            padding: 15px 0px;
            font-size: 14px;
            a{
                color: #FF575D;
            }
        }
    }
}
</style>