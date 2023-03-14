/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express';
import 'express-async-errors';
import { Application } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './util/swagger.util';
import Logger from './util/logger.util'

class App {
  public app: Application;

  public port: number;

  constructor(
    appInit: { port: number; earlyMiddlewares: any; lateMiddlewares: any; routes: any; },
  ) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.earlyMiddlewares);
    this.routes(appInit.routes);
    this.middlewares(appInit.lateMiddlewares);
    this.assets();
    this.template();
  }

  private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private routes(routes: { forEach: (arg0: (route: any) => void) => void; }) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private assets() {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private template() {
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.info(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
