import { Request, Response } from 'express';
import Logger from '../util/logger.util';

const loggerMiddleware = (req: Request, resp: Response, next) => {
  Logger.info('Request logged:', req.method, req.path);
  next();
};

export default loggerMiddleware;
