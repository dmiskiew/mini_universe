class LogBlock extends TreeBase{
  constructor(){
    super(...arguments);

    this.texture = 'log';
    this.type = 'log';
    this.transparent = true;

    this.tree = true;

    this.energy = LOG_STARTING_ENERGY;
    this.energyProduction = LOG_ENERGY_PRODUCTON;
    this.energyConsumption = LOG_ENERGY_CONSUMPTION; 

    this.overload = LOG_STARTING_OVERLOAD;
    this.overloadCreation = LOG_OVERLOAD_CREATION;
    this.overloadReduction = LOG_OVERLOAD_REDUCTION;
  
  }

  active(){
    super.active();

    this.checkForTransformateIntoBigLog();
  }

  checkForTransformateIntoBigLog(){
    if(this.energy > LOG_UPDATE_ENERGY_NEED && this.overload > LOG_UPDATE_OVERLOAD_NEED){
      mapController.changeBlockByTypeAndCoords(this.x, this.y, new BigLogBlock());
    }
  }
}
