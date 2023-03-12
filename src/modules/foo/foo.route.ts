import * as express from 'express'

import IRouteBase from '../../interfaces/IRouteBase.interface'
import FooController from './foo.controller';

import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class FooRoute implements IRouteBase {
    private fooController: FooController;

    constructor(fooController: FooController) {
      this.fooController = fooController;
      this.initializeRoutes();
    }
  
    public router = express.Router();

    initializeRoutes() {
        this.router.get('/foos', this.fooController.getFoo);
        this.router.get('/error', this.fooController.getError);
        this.router.get('/custom-error', this.fooController.getCustomError);
    }
}
