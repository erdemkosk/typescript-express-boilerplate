import FooRepository from './foo.repository';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class FooService {
  fooRepository: FooRepository;

  constructor(fooRepository: FooRepository) {
    this.fooRepository = fooRepository;
  }

  getFoos() {
    return  this.fooRepository.findAll();
  }
}
