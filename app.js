const Koa = require('koa');
const app = new Koa();
const indexRouter = require('./routes');
const views = require('koa-views');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');

const PORT = 3333;

// err handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = `error: ${err.message}`;
    console.log(`error handler: ${err.message}`);
  }
});

app.use(views(__dirname + '/views', { extension: 'pug' }));
app
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods)
app.use(logger());
app.use(responseTime());

// lonely placeholder middleware boi
app.use(async(ctx, next) => {
  await next();
});

app.listen(PORT);