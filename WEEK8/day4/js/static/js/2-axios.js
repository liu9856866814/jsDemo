// 带id
axios.get('/api/getBanner?id=1&name=mabin').then((res) => {
    console.log(res.data);
});

// 不带id
axios.get('/api/getBanner?name=mabin').then((res) => {
    console.log('no id');
    console.log(res.data);
});