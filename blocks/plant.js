class PlantBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'plant';
    this.type = 'plant';
    this.transparent = true;
  }
};
