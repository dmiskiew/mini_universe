class DirtBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'dirt';
    this.type = 'dirt';
    this.transparent = false;
  }
}
