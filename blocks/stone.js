class StoneBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'stone';
    this.type = 'stone';
    this.durability = 5;
    this.damage = 0;
    this.transparent = false;
  }
};
