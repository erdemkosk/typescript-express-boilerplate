import { inject, injectable } from 'tsyringe';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  Route,
  Security,
  Tags,
  Response,
} from 'tsoa';
import { IExampleService } from '../../interfaces/service/IExampleService';
import { ExampleRequest, ExampleResponse } from './dtos/Example';

@injectable()
@Route('example')
@Tags('ExampleController')
export class ExampleController extends Controller {
  constructor(
    @inject('IExampleService') private exampleService: IExampleService,
  ) {
    super();
  }

  @Get('/{id}')
  get(id: number): Promise<ExampleResponse> {
    return this.exampleService.getExample(id);
  }
}

export default { ExampleController };
