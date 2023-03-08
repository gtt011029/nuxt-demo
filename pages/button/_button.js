// @vue/component
export default {
    name: 'Button',
    components: {},
    async asyncData({ $axios }) {
        const res = await $axios.$get('http://127.0.0.1:5000/api/users');
        console.log(res);
        return { content: 'rdwff' };
    },
    
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
        }
    },
    
    created() {
    }
};
