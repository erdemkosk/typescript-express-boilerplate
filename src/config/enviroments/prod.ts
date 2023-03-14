import Config from './base';

class ProdConfig extends Config {
  constructor() {
    super();
    this.port = 9000;
  }
}

export default ProdConfig;
