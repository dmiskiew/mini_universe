class BigLogBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'bigLog';
    this.type = 'bigLog';
    this.transparent = false;

    this.tree = true;

    this.energy = 4;
    this.energyProduction = 0;
    this.energyConsumption = 1; 
  }
};
