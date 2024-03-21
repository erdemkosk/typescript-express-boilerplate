import { inject, injectable } from 'tsyringe';
import { ExampleRequest, ExampleResponse } from './dtos/Example';

import { IExampleService } from '../../interfaces/service/IExampleService';
import { IExampleRepository } from '../../interfaces/repository/IExampleRepository';

import { ERROR_CLASSES } from '../../util/error.util';

@injectable()
export default class ExampleService implements IExampleService {
  constructor(
    @inject('IExampleRepository')
    private repository: IExampleRepository,
  ) {
    console.log('Example Service Loaded!')
  }

  async getExample(id:number): Promise<ExampleResponse> {
    let example;
    try {
      example = await this.repository.getExample(id);
    } catch (error) {
      throw new ERROR_CLASSES.ExampleError();
    }

    return example;
  }
}
