export default class ExampleRepository {
  public async getExampleValue(id: number) {
    const examples = [{
      id: 1,
      name: 'erdem',
    },
    {
      id: 1,
      name: 'kosk',
    }];

    return examples.find((example) => example.id === id);
  }
}
