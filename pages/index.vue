<template>
  <div class='pages'>
    <Head>
      <Meta name='中文也可以'
            content='纸箱、麻袋、周转料箱的托盘拆垛，是中件仓库、产线末端等场景里常见的自动化需求。因为物件的重量通常在20-50kg，对于人工而言作业效率低，很容易形成职业病。' />
    </Head>
    pages 文件的首页, 创建了pages就自动生成路由
    <nuxt-link :to="{path: '/button', query: { newsId: 3306 }}">去button页面</nuxt-link>
    <button @click='this.download()'>点击下载</button>
    <a href='/calendar.svg'>忘记了，我是a标签</a>>
  </div>
</template>

<script src='./_pages.js' lang='js'></script>
<style src='./_pages.less' lang='less' scoped></style>
