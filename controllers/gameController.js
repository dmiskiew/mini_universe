var gameController = new(function(){
	var that = this;
	this.loopTimer;

	this.initialize = function(){
	
		mapController.createMapContainer(40, 20);
		mapController.generateDirt();
		mapController.generateStone();
		mapController.generateGrass();

		that.loopStart();
	};

	this.loopStart = function(){

		that.loop();
	};

	this.loop = function(){
	  var i = 0;
	  while(i < BLOCKS_PER_TICK){
		  mapController.activeRandomBlock();
		  i++;
		}

		that.loopTimer = setTimeout(that.loop, DELAY_TIME);
	};

	this.initialize()

	return this
});
