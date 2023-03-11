import { CustomError } from './custom-error';

interface CustomErrorOptions {
  message: string;
  code: string;
  statusCode: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const generateCustomError = <T extends { new (...args: any[]): {} }>(
  ParentClass: T,
  options: CustomErrorOptions
) => {
  const { message = '', code = '', statusCode = 500 } = options;

  return class extends ParentClass {
    constructor(...args: any[]) {
      super(message, code, statusCode);
      Object.setPrototypeOf(this, new.target.prototype);
    }

    serializeErrors() {
      return [{ message, code }];
    }
  };
};

