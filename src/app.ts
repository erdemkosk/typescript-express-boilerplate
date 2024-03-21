/* eslint-disable @typescript-eslint/no-explicit-any */
import 'express-async-errors';
import express, {
  Application,
  Response as ExResponse,
  Request as ExRequest,
} from 'express';
import swaggerUi from 'swagger-ui-express';
import Logger from './util/logger.util'
import { RegisterRoutes } from '../dist/routes';
// import { container } from './ioc';

class App {
  public app: Application;

  public port: number;

  constructor(
    appInit: { port: number; earlyMiddlewares: any; lateMiddlewares: any;},
  ) {
    this.app = express();
    this.port = appInit.port;

    this.modules();
    this.middlewares(appInit.earlyMiddlewares);
    this.routes();
    this.middlewares(appInit.lateMiddlewares);
    this.assets();
    this.template();
    this.swagger();
  }

  private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private assets() {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private template() {
  }

  private modules() {
    // container.resolve<IMongoLoader>('IMongoLoader').ConnectWithRetry();
  }

  private routes() {
    RegisterRoutes(this.app);
  }

  private swagger() {
    this.app.use(
      '/swagger',
      swaggerUi.serve,
      async (_req: ExRequest, res: ExResponse) => res.send(
        swaggerUi.generateHTML(await import('../dist/swagger.json')),
      ),
    );
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.info(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
