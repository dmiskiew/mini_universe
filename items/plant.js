class PlantItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'plant';
    this.type = 'plant';
  }

  returnNewBlock(){
    return new PlantBlock();
  }
}
