const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');

const PORT = 3333;

app.use(views(__dirname + '/views', { extension: 'pug' }));
app.use(logger());

app.use(async (ctx, next) => {
  const start = new Date;
  console.log(`started at ${start}`);
  await next();
  const ms = new Date - start;
  console.log(`elapsed: ${ms}ms`);
});

app.use(async(ctx, next) => {
  await next();
});

app.use(async (ctx) => {
  await ctx.render('index');
  console.log('body was set');
});

app.listen(PORT);