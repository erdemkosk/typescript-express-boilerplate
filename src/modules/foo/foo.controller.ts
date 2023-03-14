import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import FooService from './foo.service';

@autoInjectable()
export default class FooController {
  fooService: FooService;

  constructor(fooService: FooService) {
    this.fooService = fooService;
  }

  public getFoo = async (req: Request, res: Response): Promise<void> => {
    const foo = await this.fooService.getFoos();
    res.status(200).json(foo);
  };

  public getError = async (req: Request, res: Response): Promise<void> => {
    const error = await this.fooService.getError();
    res.status(200).json(error);
  };

  public getCustomError = async (req: Request, res: Response): Promise<void> => {
    const error = await this.fooService.getCustomError();
    res.status(200).json(error);
  };
}
