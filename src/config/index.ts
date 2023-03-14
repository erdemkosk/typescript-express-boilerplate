
import Config from "./enviroments/base";
import DevConfig from "./enviroments/dev";
import ProdConfig from "./enviroments/prod";
import TestConfig from "./enviroments/tests";
import * as dotenv from 'dotenv';

dotenv.config();

class ConfigSingleton {
  private static instance: ConfigSingleton;
  private _config: Config;

  private constructor() {
    const env: string = process.env.NODE_ENV || 'dev';
    switch (env) {
      case 'dev':
        this._config = new DevConfig();
        break;
      case 'prod':
        this._config = new ProdConfig();
        break;
      case 'test':
        this._config = new TestConfig();
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
    return this._config;
  }
}

export default ConfigSingleton.getInstance().getConfig();


