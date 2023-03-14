 type CustomErrors = {
    [key: string]: {
      parentError: typeof CustomError;
      message: string;
      code: number;
      httpCode: number;
    };
  };

class CustomError extends Error {
  constructor(
    public message: string,
    public code: number,
    public httpCode: number,
    public isCustom: boolean = true,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { CustomError, CustomErrors };
