class DirtItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'dirt';
    this.type = 'dirt';
  }

  returnNewBlock(){
    return new DirtBlock();
  }
};
