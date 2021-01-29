import { KoaHelmet } from "koa-helmet";
import * as Koa from 'koa'
import * as Compress from 'koa-compress'
import * as Bodyparser from 'koa-bodyparser'
import * as Cors from '@koa/cors'

interface BuildOptions {
  compress?: false | Compress.CompressOptions,
  helmet?: false | any,
  logger?: false | any,
  bodyparser?: false | Bodyparser.Options,
  cors?: false | Cors.Options
}

export default function buildMiddlewares (mapping: BuildOptions = {}): Koa.Middleware
