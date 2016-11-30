class CreeperItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'creeper';
    this.type = 'creeper';
  }

  returnNewBlock(){
    return new CreeperBlock();
  }
}
