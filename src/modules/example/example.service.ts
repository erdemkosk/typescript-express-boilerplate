import { autoInjectable } from 'tsyringe';
import ExampleRepository from './example.repository';

import { ERROR_CLASSES } from '../../util/error.util';

@autoInjectable()
export default class FooService {
  exampleRepository: ExampleRepository;

  constructor(exampleRepository: ExampleRepository) {
    this.exampleRepository = exampleRepository;
  }

  async getExampleValue(id:number) {
    const example = await this.exampleRepository.getExampleValue(id);

    if (!example) {
      throw new ERROR_CLASSES.ExampleError();
    }

    return example;
  }
}
