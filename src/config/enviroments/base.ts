import IConfig from '../IConfig.interface'

class Config implements IConfig {
    public port = Number(process.env.PORT) || 80;
  }
  
  export default Config;