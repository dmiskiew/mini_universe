var mapController = new (function(){
	var that = this;

	that.$container = MAP_HTML_CONTAINER;
	that.map;
	that.errorBlock = new NoneBlock();

	var mapWidth;
	var mapHeight;
		
	this.updateBlock = function(block){
		that.map[block.x][block.y].setBlock(block);
		that.map[block.x][block.y].renderBlock()
	};

	this.renderBlock = function(x, y){
		that.map[x][y].renderBlock()
	};

	this.changeBlockByTypeAndCoords = function(x, y, block){
		that.map[x][y].setBlock(block);
		that.map[x][y].renderBlock()
	}

	this.getPiece = function(x, y){
	  return that.map[x][y];
	};

	this.getBlock = function(x, y){
		if(x < 0 || y < 0){
			return that.errorBlock;
		}
		if(x >= mapWidth || y >= mapHeight){
			return that.errorBlock;
		}

		return that.map[x][y].block;
	}

	this.activeRandomBlock = function(){
		var width = mapWidth;
		var height = mapHeight;

		var x = random(0, width - 1);
		var y = random(0, height - 1);

		that.map[x][y].activeBlock();

	};

	this.createMapContainer = function(width, height){
	  mapWidth = width;
	  mapHeight = height;
		that.createMapArrayAndHtml(width, height);
	};

	this.createMapArrayAndHtml = function(width, height){
	  that.$container.empty();
		that.map = [];

    // initiate map array with another arrays
		var i = 0;
		while(i < width){
		  that.map[i] = [];
		  i++;
		}

		i = height - 1;
		while(i >= 0){
		  let $tr = $('<tr>');

			var j = 0;
			while(j < width){
			  let $td = $('<td>');
			  $td.attr('class', 'field');
				$td.attr('id', j + '_' + i);

				$tr.append($td);
				
				that.map[j][i] = new MapPiece(j, i, new AirBlock(), $td);
				j++;
			}

			that.$container.append($tr);
			i--;
		}

	};

	this.renderMap = function(){
		var i = 0;
		var width = mapWidth;

		while(i < width){

			var j = 0;
			var height = mapHeight;

			while(j < height){
				that.map[i][j].renderBlock();

				j++;
			}

			i++;
		}
	};

	this.generateStone = function(){
		var maxLevel = Math.floor(mapHeight * 0.4);
		var minLevel = Math.floor(mapHeight * 0.2);
		var before = Math.round(maxLevel * 0.3);

		var i = 0;
		while(i < mapWidth){

			var j = 0;

			before = before + random(-1, 1);
			if(before < minLevel){
				before = minLevel;
			}
			if(before > maxLevel){
				before = maxLevel
			}
			var max = before;

			while(j < max){
				that.map[i][j].setBlock(new StoneBlock());

				j++;
			}

			i++;
		}

	};

	this.generateDirt = function(){
		var maxLevel = Math.floor(mapHeight * 0.75);
		var minLevel = Math.floor(mapHeight * 0.25);
		var before = Math.round(maxLevel * 0.5);

		var i = 0;
		while(i < mapWidth){

			var j = 0;

			before = before + random(-1, 1);
			if(before < minLevel){
				before = minLevel;
			}
			if(before > maxLevel){
				before = maxLevel
			}
			var max = before;

			while(j < max){
				that.map[i][j].setBlock(new DirtBlock());

				j++;
			}

			i++;
		}

	};

	this.generateGrass = function(){
		var i = 0;
		var width = mapWidth;

		while(i < width){

			var j = mapHeight - 1;
			while(j >= 0){
				if(that.map[i][j].block.type == 'dirt'){
					that.map[i][j].setBlock(new GrassBlock());
					break;
				}
				if(that.map[i][j].block.type != 'air'){
					break;
				}
				j--;
			}
			i++;
		}

	}

	return this;
});
