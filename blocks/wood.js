class WoodBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'wood';
    this.type = 'wood';
    this.transparent = false;
  }
};
