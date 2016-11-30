class ItemBase{
  constructor(quantity = 1){
    this.quantity = quantity;
  }

  use(x, y){
    if(!this.canTakeOne()){
      return false;
    }

    var placedBlock = mapController.getBlock(x, y);

    if(placedBlock.type == 'air'){
      this.placeThisBlockOn(x, y);
      return true;
    }

    return false;
  }

  placeThisBlockOn(x, y){
    mapController.changeBlockByTypeAndCoords(x, y, this.returnNewBlock());
    this.takeOne();
  }

  canTakeOne(){
    return (this.quantity > 0);
  }

  takeOne(){
    if(this.canTakeOne()){
      this.quantity -= 1;
      return true;
    }

    return false;
  }

  returnNewBlock(){
    return {};
  }
}

