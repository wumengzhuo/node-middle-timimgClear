const Koa = require('koa');
const app = new Koa();
const timingClear = require('./timingClear')

const request = require('request')

// setInterval(() => {
//   request({
//     url: `http://localhost:3000/data/user/${Math.floor(Math.random() * 10)}`
//   })
// },1000)

app.use(timingClear())

app.listen(3000);