<!--// app.vue-例子
<script setup lang='ts'>
const title = ref('按钮页面');

// const {data, error} = await useAsyncData('count', () => {
//   return $fetch('http://127.0.0.1:5000/api/users?current_page=1&page_size=10')
// })

const {data, error} = await useFetch('http://127.0.0.1:5000/api/users?current_page=1&page_size=10')

async function test() {
  const {data, error} = await useFetch('http://127.0.0.1:5000/api/users?current_page=1&page_size=10')
  console.log(data)
}

console.log('data: ', data)
</script>-->

<template>
  <div class='button'>
    <Head>
      <Title>按钮页面</Title>
      <Meta name='desc'
            content='纸箱、麻袋、周转料箱的托盘拆垛，是中件仓库、产线末端等场景里常见的自动化需求。因为物件的重量通常在20-50kg，对于人工而言作业效率低，很容易形成职业病。' />
    </Head>
    <h1>我是but呃呃呃·ton页面</h1>
    <h1 @click='handleClick()'>测试一下click</h1>
    <h1 @click='test()'>{{ title }}</h1>
    <input v-model='title' />

  </div>
</template>

<script>
export default {
  name: 'Button',
  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      title: 'button page'
    };
  },

  computed: {},

  watch: {},

  methods: {
    handleClick() {
      console.log('handleClick');
    },
    test() {
      const { data, error } = useFetch('http://127.0.0.1:5000/api/users?current_page=1&page_size=10');
      console.log(data);
    }
  },

  created() {
    this.test();
  }
};
</script>

<style src='./_button.less' lang='less' scoped></style>
