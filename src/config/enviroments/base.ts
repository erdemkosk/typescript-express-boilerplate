import IConfig from '../IConfig.interface'

class BaseConfig implements IConfig {
    public port = Number(process.env.PORT) || 80;
  }
  
  export default BaseConfig;