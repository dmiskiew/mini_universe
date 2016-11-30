class AirBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'air';
    this.type = 'air';
    this.transparent = true;
  }
};

