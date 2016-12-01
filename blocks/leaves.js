class LeavesBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'leaves';
    this.type = 'leaves';
    this.transparent = true;

    this.tree = true;

    this.energy = 20;
    this.energyProduction = 20;
    this.energyConsumption = 10; 
  }
}
