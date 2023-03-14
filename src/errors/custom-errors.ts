import { CustomError, CustomErrors } from '../util/base-errors';

export const CUSTOM_ERRORS: CustomErrors = {
  ExampleError: {
    parentError: CustomError,
    message: 'Example Error For Test',
    code: 1,
    httpCode: 401,
  },
};
