class QuartzBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'quartz';
    this.type = 'quartz';
    this.transparent = false;
    this.creeperProof = true;
  }
};
