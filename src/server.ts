import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { errors } from 'celebrate';
import config from './config';
import App from './app';
import loggerMiddleware from './middleware/logger.middleware';
import errorMiddleware from './middleware/error.middleware';

import('express-async-errors');

const app = new App({
  port: config.port,
  earlyMiddlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
    cors(),
    helmet(),
  ],
  lateMiddlewares: [
    errors({ statusCode: 422 }),
    errorMiddleware,
  ],
});

app.listen();
