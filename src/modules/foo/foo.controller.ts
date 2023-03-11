import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import FooService from './foo.service';

@injectable()
export default class FooController {
  fooService: FooService;

  constructor(fooService: FooService) {
    this.fooService = fooService;
  }

  public getFoo = async (req: Request, res: Response): Promise<void> => {
    const foo = await this.fooService.getFoos();
    res.status(200).json(foo);
  }
}