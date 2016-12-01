class BigLogItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'bigLog';
    this.type = 'bigLog';
  }

  returnNewBlock(){
    return new BigLogBlock();
  }
}
