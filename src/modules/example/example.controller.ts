import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import ExampleService from './example.service';

@autoInjectable()
export default class ExampleController {
  exampleService: ExampleService;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
  }

  public getExampleValue = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;

    const example = await this.exampleService.getExampleValue(id);
    res.status(200).json(example);
  };
}
