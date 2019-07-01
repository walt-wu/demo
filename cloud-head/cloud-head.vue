<template>
  <div class="cloud-head">
    <img class="cloud-icon" :src="menu[menuIndex].logo" alt>
    <div class="dropdown" @click="toggleMenu" v-clickoutside="closeMenu">
      <span class="el-dropdown-link">{{menu[menuIndex].name}}
        <i class="el-icon-arrow-down"></i>
      </span>
      <!-- <transition name="menu-animate"> -->
        <ul class="router" v-show="showMenu" >
          <li v-for="(item, i) in menu" :key="i" @click="changeLink(i)"><img :src="item.logo" alt=""><p>{{item.name}}</p></li>
        </ul>
      <!-- </transition> -->
    </div>
    <div class="empty-middle"></div>
    <cloud-avatar></cloud-avatar>
  </div>
</template>
<script src="./cloud-head.js"></script>
<style lang="scss" scoped src="./cloud-head.scss"></style>
