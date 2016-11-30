class QuartzItem extends ItemBase{
  constructor(){
    super(...arguments);

    this.texture = 'quartz';
    this.type = 'quartz';
  }

  returnNewBlock(){
    return new QuartzBlock();
  }
}
