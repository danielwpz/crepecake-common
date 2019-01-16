const compose = require('koa-compose');

const compress = require('koa-compress');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');

const middlewares = [];

middlewares.push(logger());
middlewares.push(helmet());
middlewares.push(cors());
middlewares.push(bodyparser());
middlewares.push(compress());

module.exports = compose(middlewares);