class BlockBase{
  constructor(x, y){
    this.x = x;
    this.y = y;

    this.durability = 1;
    this.damage = 0;
  }

  getDamage(value){
    this.damage += value;
    if(this.damage >= this.durability){
      this.destroy()
    }
  }

  destroy(){
    mapController.changeBlockByTypeAndCoords(this.x, this.y, new AirBlock());
  }

  getDownBlock(){
    return mapController.getBlock(this.x, this.y - 1);
  }

  getUpBlock(){
    return mapController.getBlock(this.x, this.y + 1);
  }

  getLeftBlock(){
    return mapController.getBlock(this.x - 1, this.y);
  }

  getRightBlock(){
    return mapController.getBlock(this.x + 1, this.y);
  }

};
