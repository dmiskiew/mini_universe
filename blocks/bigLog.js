class BigLogBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'bigLog';
    this.type = 'bigLog';
    this.transparent = false;

    this.tree = true;

    this.energy = BIG_LOG_STARTING_ENERGY;
    this.energyProduction = BIG_LOG_ENERGY_PRODUCTON;
    this.energyConsumption = BIG_LOG_ENERGY_CONSUMPTION; 

    this.overload = BIG_LOG_STARTING_OVERLOAD;
    this.overloadCreation = BIG_LOG_OVERLOAD_CREATION;
    this.overloadReduction =BIG_LOG_OVERLOAD_REDUCTION;
  }
};
