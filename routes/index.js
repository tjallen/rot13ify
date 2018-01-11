const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index');
});

router.post('/submit', async (ctx, next) => {
  await ctx.render('submit');
});

module.exports = router;