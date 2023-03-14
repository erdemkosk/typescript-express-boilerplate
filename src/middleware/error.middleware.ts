import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err, req: Request, res: Response, next: NextFunction) => {
  if (err.isCustom) { // we noticed that this is the custom error
    res.status(err.httpCode).json({
      message: err.message,
      errorCode: err.code,
      success: false,
    });
  } else {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }

  next(err);
};

export default errorMiddleware;
