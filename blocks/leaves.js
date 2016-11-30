class LeavesBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'leaves';
    this.type = 'leaves';
    this.transparent = true;
  }
}
