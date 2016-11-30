class WoodItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'wood';
    this.type = 'wood';
  }

  returnNewBlock(){
    return new WoodBlock();
  }
}
