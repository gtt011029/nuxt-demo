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
      <Meta name='按钮页面'
            content='纸箱、麻袋、周转料箱的托盘拆垛，是中件仓库、产线末端等场景里常见的自动化需求。因为物件的重量通常在20-50kg，对于人工而言作业效率低，很容易形成职业病。' />
    </Head>
    <h1>我是but呃呃呃·ton页面</h1>
    <h1 @click='handleClick()'>测试一下click</h1>
    <h1 class='button-request' @click='requestTest()'>{{ title }} 测试一下请求的发送</h1>
    <button @click='test()'>试一下 useFetch</button>
    <input v-model='title' />
    <h1>name: {{ name }}</h1>
    <button @click='changeName()'>更改name</button>
    <!--    <h1>{{data.code}}</h1>-->
    <p>Has published books:</p>
    <div v-for='item in author.books'>
      <span>{{ item }}</span>
    </div>
    <span>{{ author.books.length > 4 ? 'Yes' : 'No' }}</span>
    <br />
    <span>{{ publishedBooksMessage }}</span>
    <br />
    <input type='text' v-model='newBook'>
    <button @click='addBook()'>add book</button>
    <h1 :class='[testOne, testTwo]'>{{ fullName }}</h1>
    <h1 :class='isActivate ? testOne : testTwo'>{{ fullName }}</h1>
    <button @click='changeFullName'>change full</button>
    <button @click='toggleClass()'>toggle class</button>
    <div id='test'>我是id 为test的div</div>


  </div>
</template>

<script>
import { useAsyncData, useFetch } from 'nuxt/app';

export default {
  name: 'Button',
  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      isActivate: true,
      testOne: 'test1',
      testTwo: 'test2',
      title: 'button page',
      name: 'tina',
      firstName: 'Tingting',
      lastName: 'Ge',
      newBook: '',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 -advanced Guide',
          'Vue3 -Basic Guide',
          'Vue 4 -The Mystery'
        ]
      }
    };
  },

  // 计算属性
  computed: {
    // 计算属性会基于响应式依赖被缓存，一个计算属性仅会在其响应式依赖更新时才重新计算
    publishedBooksMessage() {
      return this.author.books.length > 4 ? 'yes' : 'no';
    },
    fullName: {
      get() {
        return this.firstName + '' + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
      }
    }
  },

  watch: {},

  methods: {
    handleClick() {
      console.log('handleClick');
    },
    test() {
      const { data, pending, refresh, execute, error } = useFetch('api/users', {
        query: {
          current_page: 1,
          page_size: 10
        }
      });
      // refresh/execute : 可用于刷新handler函数返回的数据的函数
      refresh(); // 必须刷新一下？？？，这样下面就可以打印出数据了
      // console.log('useFetch怎么用： ', data);
    },

    requestTest() {
      $fetch('api/users', {
        query: {
          current_page: 1,
          page_size: 10
        }
      }).then((resp) => {
        // console.log('resp: ', resp);
      });
    },
    changeName() {
      // 更改完成后，师徒可以监听的到
      this.name = 'tina-changed';
    },
    addBook() {
      if (this.newBook) {
        this.author.books.push(this.newBook);
      } else {
        alert('书名不得为空');
      }
    },
    changeFullName() {
      this.fullName = 'Tina Ge';
    },
    toggleClass() {
      this.isActivate = !this.isActivate;
    }
  },

  // 组件实例初始化完成之后、props解析之后， data()和computed等选项之前立即调用
  beforeCreate() {
    console.log('我是before created');
    console.log('before: ', this.title); // undefined这边是获取不到data里面的数据的
  },

  // 在组件实例处理完所有与<strong>状态</strong>相关的选项后调用
  // 响应式数据、计算属性、方法、侦听器
  created() {
    // this.requestTest();
    console.log('title: ', this.title); // 这边还是可以获取到data里面的数据的
    this.test();
    this.title = 'create 里面改变的title';

    // const { data, pending, error, refresh } = await useAsyncData('testReq', () => $fetch('/api/users', {
    //   query: {
    //     current_page: 1,
    //     page_size: 10
    //   }
    // }));
    // console.log('useAsyncData返回的结果: ', data);
  },

  // 组件被挂载之前调用
  // 已经完成了响应式状态的设置， 但是还没有创建DOM节点
  // 注意： 这个钩子在服务端渲染时不会被调用（可以是测试了一下， 有渲染呀）
  beforeMount() {
    console.log('beforeMount');
    console.log(document.getElementById('test'));  // null 这边就获取不到dom
  },

  // 组件完成初始渲染并创建DOM节点后运行的代码
  mounted() {
    console.log(document.getElementById('test')); // 这边就可以获取dom

  }
};
</script>

<style src='./_button.less' lang='less' scoped></style>
