import "reflect-metadata";
import App from './app'

import config from '../config'

import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import loggerMiddleware from './middleware/logger'

import FooRoutes from './modules/foo/foo.route'
import FooController from './modules/foo/foo.controller'
import FooService from './modules/foo/foo.service'
import FooRepostory from './modules/foo/foo.repository'


import { container } from './container';

console.log(container);

const fooRoutes = container.resolve(FooRoutes);

const app = new App({
    port: config.port,
    routes: [
        fooRoutes,
    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
    ]
})

app.listen()
