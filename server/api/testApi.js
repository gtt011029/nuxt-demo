export default defineEventHandler((event) => {
    // const {req, res} = event.node; // 获取到请求的数据
    // console.log(req);
    
    const query = getQuery(event) // 获取请求参数
    return {
        status: 1,
        msg: '成功了吗' + query.id
    };
});
