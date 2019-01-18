const compose = require('koa-compose');

const compress = require('koa-compress');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');

const middlewares = [];
const middlewareNameMap = {
  compress,
  helmet,
  logger,
  bodyparser,
  cors
};

function buildMiddlewares(mapping) {
  if (!mapping) {
    mapping = {};
  }

  /**
   * config and add default middlewares first
   */
  for (let name of Object.keys(middlewareNameMap)) {
    if (middlewareNameMap.hasOwnProperty(name) && mapping[name] !== false) {
      const middlewareConfig = mapping[name];
      middlewares.push(middlewareNameMap[name](middlewareConfig));
    }
  }

  /**
   * add custom middlewares
   */
  for (const name of Object.keys(mapping)) {
    if (!middlewareNameMap[name]) {
      middlewares.push(mapping[name]);
    }
  }

  return compose(middlewares);
}

module.exports = buildMiddlewares;