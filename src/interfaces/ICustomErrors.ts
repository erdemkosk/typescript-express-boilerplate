export default interface CustomErrors {
    [key: string]: {
      parentError: ErrorConstructor;
      message: string;
      code: number;
      httpCode?: number;
    };
  }
