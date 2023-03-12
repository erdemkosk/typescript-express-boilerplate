/* eslint-disable @typescript-eslint/no-var-requires */
import "reflect-metadata";
import { container } from 'tsyringe';
import * as glob from 'glob';
import * as path from 'path';

export class ContainerLogic {
  public static getRouteClasses(): any[] {
    const moduleFolder = path.join(__dirname, '../modules');
    const routeFiles = glob.sync(`${moduleFolder}/**/*.route.ts`);
    return routeFiles.map((routeFile) => container.resolve(require(routeFile).default));
  }
}
