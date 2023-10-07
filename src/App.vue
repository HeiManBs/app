
<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/register">登录页</router-link> |
      <router-link to="/login">注册页</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
// 引入公共样式图样
@import url('http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css');
*{
    margin:0;
    padding:0;
}
    
a{
    color: inherit;
}

a:hover{
    text-decoration: none;
}

ul,li,ol{
    list-style: none;
}
</style>
