const Koa = require('koa');
const app = new Koa();

const PORT = 3333;

app.use(async (ctx, next) => {
  const start = new Date;
  console.log(`started at ${start}`);
  await next();
  const ms = new Date - start;
  console.log(`elapsed: ${ms}ms`);
});

app.use(async(ctx, next) => {
  console.log('yo im some middleware');
  await next();
  console.log('the body has been set here');
});

app.use(async (ctx) => {
  ctx.body = 'Hello world';
  console.log('body was set');
});

app.listen(PORT);