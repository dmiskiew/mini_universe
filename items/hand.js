class Hand extends ItemBase{
  constructor(){
    super(...arguments);

    this.quantity = false;
    this.texture = 'hand';
    this.type = 'nothing';
  }

  use(x, y){
    mapController.getBlock(x, y).getDamage(2);
  }
}
