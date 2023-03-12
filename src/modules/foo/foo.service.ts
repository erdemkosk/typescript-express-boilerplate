import FooRepository from './foo.repository';
import { autoInjectable } from 'tsyringe';

import { ERROR_CLASSES } from '../../util/error.util';


@autoInjectable()
export default class FooService {
  fooRepository: FooRepository;

  constructor(fooRepository: FooRepository) {
    this.fooRepository = fooRepository;
  }

  async getFoos() {
    return this.fooRepository.findAll();
  }

  async getError() {
    throw new Error('This is not custom error');
  }

  async getCustomError() {
    throw new ERROR_CLASSES.ExampleError();
  }
}
