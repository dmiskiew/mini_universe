class LeavesItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'leaves';
    this.type = 'leaves';
  }

  returnNewBlock(){
    return new LeavesBlock();
  }
}
