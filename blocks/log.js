class LogBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'log';
    this.type = 'log';
    this.transparent = true;

    this.tree = true;

    this.energy = 2;
    this.energyProduction = 0;
    this.energyConsumption = 0.5; 
  }
}
