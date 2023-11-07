<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="invite">
    <div class="position">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
        <span>客服</span><span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invite {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    background: #FFF;
  }
}
</style>