
import * as swaggerJSDoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

import * as glob from 'glob';
import * as path from 'path';

const moduleFolder = path.join(__dirname, '../modules');
const routeFiles = glob.sync(`${moduleFolder}/**/*.route.{ts,js}`);

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A simple API for demonstrating Swagger',
    },
    servers: [
      {
        url: '/',
      },
    ],
    components: {
      securitySchemes: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
      },
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
      },
    },
  },
  apis: routeFiles,
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);

