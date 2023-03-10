// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: '星猿哲',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'test', content: '为什么页面的元素加不上'},
                {
                    name: 'description',
                    content: '星猿哲科技 (XYZ Robotics) 凭借全球前沿的3D视觉、机器人运动规划和夹具设计等技术，为物流和制造业提供深筐无序上下料、装配、拆码垛、小件分拣等工业机器人视觉解决方案，目前已广泛应用于汽车、铸造、医药、电商、日化、消费品等行业头部企业。公司在3年内连续获得多家头部VC基金投资，融资额度及产品落地速度均领跑所处赛道。'
                }
            ],
            script: [
                {src: 'https://awesome-lib.js'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://awesome-lib.css'}
            ],
        },
    },
    nitro: {
        devProxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
                prependPath: true
            },
        },
        routeRules: {
            '/api': {
                proxy: 'http://localhost:5000'
            }
        }
    },
    vite: {
        server: {
            proxy: {
                '/api/': {
                    target: 'http://127.0.0.1:5000',
                    changeOrigin: true,
                }
            },
        }
    },
    // css: [
    //     // 直接加载一个 Node.js 模块（这里是一个 Sass 文件）
    //     'bulma',
    //     // 项目中的 CSS 文件
    //     '@/assets/css/main.css',
    //     // 项目中的SCSS文件
    //     '@/assets/css/main.scss',
    // ]
})
