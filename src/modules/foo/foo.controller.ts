import { Request, Response } from 'express';
import FooService from './foo.service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
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