import * as express from 'express';

import { autoInjectable } from 'tsyringe';
import { celebrate } from 'celebrate';
import IRouteBase from '../../interfaces/IRouteBase.interface';
import ExampleController from './example.controller';
import schemas from './example.schema'

@autoInjectable()
export default class FooRoute implements IRouteBase {
  private exampleController: ExampleController;

  constructor(exampleController: ExampleController) {
    this.exampleController = exampleController;
    this.initializeRoutes();
  }

  public router = express.Router();

  initializeRoutes() {
    /**
     * @swagger
     *
     * /example:
     *   get:
     *     summary: Get a Example
     *     description: Retrieve a Example
     *     tags:
     *       - example
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: query
     *         required: true
     *         description: Example ID.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Example value.
     *         schema:
     *           type: object
     *           properties:
     *             value:
     *               type: string
     */
    this.router.get('/example', celebrate(schemas.getFoo), this.exampleController.getExampleValue);
  }
}
