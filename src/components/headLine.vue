<template>
  <div class="container">
    <div class="items">
      <div class="item">Careers</div>
      <div class="item">Investors</div>
      <div class="item">Newsroom</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  height: 40px;
  background-color: rgba(243, 243, 243, 1);
  display: flex;
  justify-content: flex-end;
  .items {
    display: flex;
    height: 100%;
    display: flex;
    align-items: center;
    .item {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 50px;
      color: rgba(0, 0, 0, 0.7);
      cursor: pointer;
      &:hover {
        font-weight: bold;
        border-bottom: 2px solid blue;
      }
    }
  }
}
</style>
