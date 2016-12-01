class LogWithLeavesBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'logWithLeaves';
    this.type = 'logWithLeaves';
    this.transparent = true;

    this.tree = true;

    this.energy = 10;
    this.energyProduction = 10;
    this.energyConsumption = 5; 
  }

}
