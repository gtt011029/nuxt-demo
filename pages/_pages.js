// @vue/component
import { downloadFileByUrl } from '@/utils/utils';

export default {
    name: 'Pages',
    
    components: {},
    
    mixins: [],
    
    props: {},
    
    data() {
        return {
        };
    },
    computed: {},
    
    watch: {},
    
    created() {},
    
    methods: {
        download() {
            console.log('test');
            downloadFileByUrl('/calendar.svg', 'test.svg');
        }
    }
};
