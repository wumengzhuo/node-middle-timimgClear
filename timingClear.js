const data = {};

module.exports = () => {
  return async (ctx, next) => {
    console.log(ctx.method)
    const key = ctx.url
    if(ctx.method === 'GET' && ctx.url.indexOf('/data/user') != -1){
      const startTime = new Date().getTime()
      if(data[key]){
        ctx.body = data[key]
      }else{
        data[key] = await getData(key);
        ctx.body = data[key]
      }
      const endTime = new Date().getTime()
      console.log(`${ctx.url}--${endTime - startTime}ms`)
    }
  }
}

function getData(key) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(key)
    },500)
  }) 
}


setInterval(() => {
  let date = new Date();
  let housr = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if(housr === '19' && minutes === '53' && seconds === '0'){
    console.log('已清除')
    data = {clear: 'clear'}
  }
},1000)