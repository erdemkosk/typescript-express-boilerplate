import * as dotenv from 'dotenv';
import Config from './enviroments/base';
import DevConfig from './enviroments/dev';
import ProdConfig from './enviroments/prod';
import TestConfig from './enviroments/tests';

dotenv.config();

class ConfigSingleton {
  private static instance: ConfigSingleton;

  private config: Config;

  private constructor() {
    const env: string = process.env.NODE_ENV || 'dev';
    switch (env) {
      case 'dev':
        this.config = new DevConfig();
        break;
      case 'prod':
        this.config = new ProdConfig();
        break;
      case 'test':
        this.config = new TestConfig();
        break;
      default:
        throw new Error('Unexpected env variable values found!');
    }
  }

  public static getInstance(): ConfigSingleton {
    if (!ConfigSingleton.instance) {
      ConfigSingleton.instance = new ConfigSingleton();
    }

    return ConfigSingleton.instance;
  }

  public getConfig(): Config {
    return this.config;
  }
}

export default ConfigSingleton.getInstance().getConfig();
