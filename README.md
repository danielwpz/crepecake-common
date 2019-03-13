# crepecake-common

Commonly-used middlewares for crepecake.

## Default middlewares
1. compress: https://github.com/koajs/compress
2. helmet: https://github.com/venables/koa-helmet
3. logger: https://github.com/danielwpz/logger
4. bodyparser: https://github.com/koajs/bodyparser
5. cors: https://github.com/koajs/cors

## Examples

1. Use default middlewares
```
const common = require('crepecake-common');
const app = new CrepeCake();

app.use(common());
```

2. Config default middlewares
```
const common = require('crepecake-common');
const app = new CrepeCake();

app.use(common({
  helmet: {...helmet options},
  bodyparser: {...bodyparser options}
}));
```

3. Use custom middlewares
```
const common = require('crepecake-common');
const app = new CrepeCake();

app.use(common({
  bodyparser: false,  // set false will disable the default middleware
  myBodyparser: (ctx, next) => {...}  // add your own
}));
```