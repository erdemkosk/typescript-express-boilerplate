import { IocContainer } from '@tsoa/runtime';
import { container } from 'tsyringe';

import ExampleRepository from '../modules/example/ExampleRepository';
import ExampleService from '../modules/example/ExampleService';

container.register('IExampleService', { useClass: ExampleService });
container.register('IExampleRepository', { useClass: ExampleRepository });

// eslint-disable-next-line max-len
export const iocContainer: IocContainer = { get: <T>(controller: { prototype: T }): T => container.resolve<T>(controller as never) };

export { container };

export default iocContainer;
