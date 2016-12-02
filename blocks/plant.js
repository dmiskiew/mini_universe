class PlantBlock extends BlockBase{
  constructor(){
    super(...arguments);

    this.texture = 'plant';
    this.type = 'plant';
    this.transparent = true;
    this.growPhase = 0;
    this.toTree = 2;
  }

  active(){
	  if(this.checkDownForGrass()){
	    this.grow();
	  }
  }

  checkDownForGrass(){
	  var downBlock = mapController.getBlock(this.x, this.y - 1);
	  if(downBlock.type != 'grass'){
	    mapController.getPiece(this.x, this.y).setBlock(new AirBlock());
		  return false;
	  }
	  return true;
  }

  grow(){
	  this.growPhase++;
	  if(this.growPhase >= this.toTree){
	    this.growToTree();
	  }
  }

  growToTree(){
    mapController.changeBlockByTypeAndCoords(this.x, this.y, new BranchBlock());
  }
};
