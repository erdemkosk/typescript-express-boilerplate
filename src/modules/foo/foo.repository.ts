export default class FooRepository {
  public async findAll() {
    const foos = [{
      id : 1,
      name : 'erdem'
    },
    {
      id : 2,
      name : 'erdem'
    }];
  
    return foos;
  }
}

