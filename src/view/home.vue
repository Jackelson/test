<template>
  <div class="wrap">
    <headLine></headLine>
    <div class="menu_wape">
      <div class="logo_wape">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <menus @close="showInput = false"></menus>
      <div class="icons">
        <div class="global"></div>
        <div class="search" @click="search"></div>
      </div>
    </div>
    <div class="search_input" v-show="showInput">
      <input class="input" placeholder="seach" />
      <div class="icon"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import headLine from "../components/headLine.vue";
import menus from "../components/menus.vue";
import { ref } from "vue";
const showInput = ref(false);
const search = () => {
  showInput.value = true;
};
</script>

<style scoped lang="scss">
.menu_wape {
  padding: 10px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icons {
    display: flex;
    width: 100px;
    justify-content: space-between;
    .global {
      width: 30px;
      height: 30px;
      background-image: url("../assets/global.png");
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
    .search {
      width: 30px;
      height: 30px;
      background-image: url("../assets/search.png");
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }
}
.logo_wape {
  width: 140px;
  height: 33px;
  img {
    width: 100%;
    height: 100%;
  }
}
.search_input {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding: 0px 80px;
  box-sizing: border-box;
  .input {
    height: 30px;
    border: none !important;
    width: 100%;
    padding: 0 10px;
    font-size: 18px;
    // height:
    border-radius: 30px;
  }
  .icon {
    width: 30px;
    height: 30px;
    background-image: url("../assets/voice.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 90px;
  }
}
</style>
