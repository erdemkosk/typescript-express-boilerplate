import * as express from 'express';

import { autoInjectable } from 'tsyringe';
import IRouteBase from '../../interfaces/IRouteBase.interface';
import FooController from './foo.controller';

@autoInjectable()
export default class FooRoute implements IRouteBase {
  private fooController: FooController;

  constructor(fooController: FooController) {
    this.fooController = fooController;
    this.initializeRoutes();
  }

  public router = express.Router();

  initializeRoutes() {
    /**
 * @swagger
 * /foos:
 *   get:
 *     summary: Get a Foos
 *     description: Retrieve a Foos
 *     tags:
 *       - foo
 *     responses:
 *       200:
 *         description: The requested Foo object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: The requested Foo object not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Foo not found.
 *                 code:
 *                   type: number
 *                   example: 404
 *                 errorCode:
 *                   type: number
 *                   example: 1000
 *                 error:
 *                   type: boolean
 *                   example: true
 */

    this.router.get('/foos', this.fooController.getFoo);

    this.router.get('/error', this.fooController.getError);
    this.router.get('/custom-error', this.fooController.getCustomError);
  }
}
