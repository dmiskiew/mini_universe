class TulipItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'tulip';
    this.type = 'tulip';
  }

  returnNewBlock(){
    return new TulipBlock();
  }
}
