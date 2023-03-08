<template>
    <div class="pages">
      pages 文件的首页, 创建了pages就自动生成路由
      <nuxt-link :to="{path: '/button', query: { newsId: 3306 }}">去button页面</nuxt-link>
<!--      <NuxtLink to='/button' >去button页面</NuxtLink>-->
    </div>
</template>

<script src="./_pages.js" lang="js"></script>
<style src="./_pages.less" lang="less" scoped></style>
