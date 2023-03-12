
import App from './app'

import config from '../config'

import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import helmet from 'helmet'
import loggerMiddleware from './middleware/logger'

import { ContainerLogic } from './logic/container.logic';

const app = new App({
    port: config.port,
    routes: ContainerLogic.getRouteClasses(),
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
        cors(),
        helmet(),
    ]
})

app.listen()
