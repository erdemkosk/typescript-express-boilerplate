import { ExampleRequest, ExampleResponse } from '../../modules/example/dtos/Example';

export interface IExampleRepository {
  getExample(id:number): Promise<ExampleResponse>;
}
