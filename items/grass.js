class GrassItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'grass';
    this.type = 'grass';
  }

  returnNewBlock(){
    return new GrassBlock();
  }
};
