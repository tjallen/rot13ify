const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');

const PORT = 3333;

app.use(views(__dirname + '/views', { extension: 'pug' }));
app.use(logger());
app.use(responseTime());

app.use(async(ctx, next) => {
  await next();
});

app.use(async (ctx) => {
  await ctx.render('index');
});

app.listen(PORT);