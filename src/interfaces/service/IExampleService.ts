import { ExampleRequest, ExampleResponse } from '../../modules/example/dtos/Example';

export interface IExampleService {
  getExample(id:number): Promise<ExampleResponse>;
}
