const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'root dir';
    ctx.set({
        'Etag': '1234',
        'Last-Modified': 'xx'
    });
}).get('/xm/:id', (ctx, next) => {
    ctx.body = '/xm/:id';
});

app
    .use(async (ctx, next) => {
        await next();
    })
    .use(async (ctx, next) => {
        await next();
    })
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);