const Koa = require('koa');
const app = new Koa();
const indexRouter = require('./routes');
const views = require('koa-views');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');

const PORT = 3333;

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