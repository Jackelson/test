<template>
  <div>
    <div class="menus">
      <div
        class="menu"
        v-for="n in menus"
        :key="n.id"
        @mouseover="handelEnter(n)"
        @mouseout="handelLeave()"
        @click="handelClick(n)"
      >
        {{ n.name }}
      </div>
    </div>
    <div class="subMenu" v-show="submenu.length > 0">
      <div class="menu" v-for="n in submenu" :key="n.id">{{ n.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { getMenu } from "../api/index";
const emits = defineEmits("close");
const menus = ref([]);
const submenu = ref([]);
const getMenuList = async () => {
  const res = await getMenu();
  if (res.code == 200) {
    menus.value = res.data;
  }
};
getMenuList();
const handelEnter = (n: Object) => {
  //   console.log(n);
  emits("close");
  submenu.value = n.submenu;
};
const handelLeave = () => {
  submenu.value = [];
};
const handelClick = (n: Object) => {
  if (n.id == "04") {
    window.location.href = "http://www.baidu.com";
  }
};
</script>

<style scoped lang="scss">
.menus {
  width: 400px;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .menu {
    cursor: pointer;
    color: rgba(163, 190, 245, 1);
    &:hover {
      color: rgba(65, 90, 214, 1);
    }
  }
}
.subMenu {
  background-color: blue;
  position: absolute;
  height: 50px;
  display: flex;
  width: 100vw;
  left: 0;
  top: 90px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 15px;
  .menu {
    border-right: 1px solid #fff;
    padding: 0 20px;
    &:last-child {
      border-right: none;
    }
  }
}
</style>
