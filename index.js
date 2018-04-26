// process.env.DEBUG='*,-app:*';
process.env.DEBUG='sys';
const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();
var debug = require('debug')('sys');
debug('init');
var server = require('koa-static')('.', {
    gzip: true,
    index: 'index.html'
});
router.get('/example/:id', (ctx, next) => {
    ctx.body =  `
        you input ${ctx.params.id}
        query params ${JSON.stringify(ctx.query)}
    `;
});

app.use(server)
    .use(async (ctx, next) => {
        await next();
    })
    .use(async (ctx, next) => {
        await next();
    })
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3001);