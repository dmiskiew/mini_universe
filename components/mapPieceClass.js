var MapPiece = function(x, y, block, $html){
  this.x = x;
  this.y = y;
  this.$html = $html;
  this.setBlock(block);
};

MapPiece.prototype.renderBlock = function(){
  setTexture(this.$html, this.block.texture);
};

MapPiece.prototype.setBlock = function(block){
  this.block = block;
  block.x = this.x;
  block.y = this.y;
};

MapPiece.prototype.setBlockType = function(type){
  this.block.type = type;
};

MapPiece.prototype.activeBlock = function(){
  if(this.block.active){
    this.block.active();
  }
};
