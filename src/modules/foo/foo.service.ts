import FooRepository from './foo.repository';
import { injectable } from 'tsyringe';

@injectable()
export default class FooService {
  fooRepository: FooRepository;

  constructor(fooRepository: FooRepository) {
    this.fooRepository = fooRepository;
  }

  getFoos() {
    return  this.fooRepository.findAll();
  }
}
