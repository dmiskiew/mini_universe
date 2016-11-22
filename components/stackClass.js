var Stack = function(item, quantity){
  this.item = item;
  this.quantity = quantity;
};

Stack.prototype.getOne = function(){
  if(this.quantity > 0){
    this.quantity--;
    return true;
  }
  return false;
}

Stack.prototype.use = function(){
  this.item.use || this.item.use();
}
