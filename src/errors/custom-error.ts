export abstract class CustomError extends Error {
  constructor(
    public readonly message: string = '',
    public readonly code: string = '',
    public readonly statusCode: number = 500
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  abstract serializeErrors(): { message: string; code: string }[];
}
