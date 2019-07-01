<template>
  <div>
    <el-carousel
      trigger="click"
      :initial-index="index"
      :autoplay="false" class="carousel" :height="height">
      <el-carousel-item v-for="(item, index) in imgUrlArr" :key="index">
        <el-image
        class="preview-image"
        :src="item"
        fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
    <span class="el-icon-close" @click="close"></span>
  </div>
</template>
<script src="./preview-image.js"></script>
<style lang="scss" scoped src="./preview-image.scss"></style>
