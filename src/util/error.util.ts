import { CustomError } from './base-errors';
import { CUSTOM_ERRORS } from '../errors/custom-errors';

function generateCustomError(
  parentError: typeof CustomError,
  errorKey: string,
  message: string,
  code: number,
) {
  return class extends parentError {
    constructor() {
      super(message, code, 400);
      this.name = errorKey;
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ERROR_CLASSES: Record<string, any> = Object.entries(CUSTOM_ERRORS).reduce(
  (errorClasses, [errorKey, errorDetails]) => {
    const { parentError, message, code } = errorDetails;
    const CustomErrorClass = generateCustomError(
      parentError,
      errorKey,
      message,
      code,
    );
    return {
      ...errorClasses,
      [errorKey]: CustomErrorClass,
    };
  },
  {},
);
