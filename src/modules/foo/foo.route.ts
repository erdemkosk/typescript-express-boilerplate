import * as express from 'express'
import { injectable } from 'tsyringe';
import IRouteBase from '../../interfaces/IRouteBase.interface'

import FooController from './foo.controller';

@injectable()
export default class FooRoutes implements IRouteBase {
    private fooController: FooController;

    constructor(fooController: FooController) {
      this.fooController = fooController;
      this.initializeRoutes();
    }
  
    public router = express.Router();

    initializeRoutes() {
        console.log('kop');
        this.router.get('/foos', this.fooController.getFoo);
    }
}
