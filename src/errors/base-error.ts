import { generateCustomError } from './error-factory';
import { CustomError } from './custom-error';

class BadRequestError extends generateCustomError(CustomError, {
    message: 'Bad request',
    code: 'BAD_REQUEST',
    statusCode: 400,
  }) {}
  
  class NotFoundError extends generateCustomError(CustomError, {
    message: 'Resource not found',
    code: 'NOT_FOUND',
    statusCode: 404,
  }) {}
  
  // Export the custom error classes
  export { BadRequestError, NotFoundError };
  
