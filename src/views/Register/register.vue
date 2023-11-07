<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const login = ()=>{
router.push("/login")
}
</script>

<template>
    <div class="register">
        <div class="box">
            <h3>注册</h3>
            <input type="text" placeholder="请输入用户名">
            <input type="password" placeholder="请输入密码">
            <input type="password" placeholder="请再次输入密码">
            <div class="btn">
                <button>注册</button><button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.register{
    width: auto;
    height: auto;
    background: #F5F5F5;
    .box{
        width: auto;        
        height: 260px;
        margin-top: 160px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        h3{
            font-size: 22px;
        }
        input{
            height: 35px;
            width: 60%;
            padding-left: 15px;
            font-size: 14px;
            color: #666;
            :focus{
                outline: none;
            }
        }
        .btn{
            display: flex;
            justify-content: space-around;
            button{
                width: 70px;
                height: 35px;
                border: 0;
                margin: 0px 25px;
                background: #364f6b;
                font-size: 13px;
                border-radius: 3px;
                color: #FFF;
            }
        }
    }
}
</style>

