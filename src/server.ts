import "reflect-metadata";
import { container } from 'tsyringe';
import App from './app'

import config from '../config'

import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import loggerMiddleware from './middleware/logger'

import FooRoutes from './modules/foo/foo.route'

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
