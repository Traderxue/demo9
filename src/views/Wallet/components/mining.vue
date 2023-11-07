<script setup>
import { ref } from "vue";

const listData = ref([
    {
        income:"1446",
        cycle:"30",
        price:"3000",
        hold:"1"
    },
    {
        income:"1046",
        cycle:"30",
        price:"3000",
        hold:"1"
    },
    {
        income:"2446",
        cycle:"30",
        price:"3000",
        hold:"6"
    },
    {
        income:"2046",
        cycle:"30",
        price:"3000",
        hold:"1"
    },
])
</script>

<template>
    <div class="mining">
        <div class="per" v-for="(item,index) in listData" :key="index">
            <div class="title">
                <span>微行矿机</span><span>{{item.price}} USDT</span>
            </div>
            <div class="mid">
                <span>收益(USD)</span><span>运营周期</span><span>价格(USD)</span><span>最多持有</span>                
            </div>
            <div class="bottom">
                <span>{{item.income}}</span><span>{{item.cycle}}天</span><span>{{item.price}}</span><span>{{item.hold}}</span>
            </div>
            <div class="btn">
                <button>购买</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mining{
    width: auto;
    height: auto;
    padding: 15px;
    .per{
        display: flex;        
        justify-content: space-around;        
        flex-direction: column;
        background: #F5DEAB;
        padding: 20px 5px;
        margin: 15px 0px;
        border-radius: 5px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 3px;
            font-size: 14px;
        }
        .title{
            font-weight: 600;
        }
        .mid{
            span{
                width: 25%;
                text-align: center;
            }
        }
        .bottom{
            span{
                width: 25%;
                text-align: center;
            }
        }
        .btn{
            button{
                width: 90%;
                margin-top: 10px;
                border-radius: 5px;
                height: 30px;
                border: 0;
                background: #08d9d6;
                color: #FFF;
                font-size: 13px;
            }
        }
    }   
}
</style>