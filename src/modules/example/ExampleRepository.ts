import { IExampleRepository } from '../../interfaces/repository/IExampleRepository';
import { ExampleRequest, ExampleResponse, Example } from './dtos/Example';

export default class ExampleRepository implements IExampleRepository {
  getExample(id:number): Promise<ExampleResponse> {
    const examples: Example[] = [{
      id: 1,
      name: 'erdem',
    },
    {
      id: 2,
      name: 'kosk',
    }];

    const foundExample = examples.find((example) => example.id === id);

    if (!foundExample) {
      return Promise.reject(new Error('Example not found'));
    }

    return Promise.resolve(foundExample);
  }
}
