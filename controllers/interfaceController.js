var interfaceController = new(function(){
 	var that = this;

	this.selectedBlock = 0;
	this.dataBlock = {};
	this.toolbarBlocks = [];

 	this.initialize = function(){
 		that.handleMap();
 		that.handleToolbar();
 		that.createStacks();

 		that.renderToolbar();
 	};

 	this.createStacks = function(){
		that.toolbarBlocks.push(new Hand());
		that.toolbarBlocks.push(new GrassItem(1));
		that.toolbarBlocks.push(new DirtItem(64));
		that.toolbarBlocks.push(new BigLogItem(64));
		that.toolbarBlocks.push(new LeavesItem(64));
		that.toolbarBlocks.push(new TulipItem());
		that.toolbarBlocks.push(new PlantItem(30));
		that.toolbarBlocks.push(new CreeperItem());
		that.toolbarBlocks.push(new QuartzItem());
 	};

 	this.handleMap = function(){
		$('body').on('mousedown', '.field', function(event){
 			var $target = $(event.target);
 			var id = $target.attr('id');
 			id = id.split('_');

 			var item = that.toolbarBlocks[that.selectedBlock];
      item.use(id[0], id[1]);

      that.renderToolbar();
 		});

		$('body').on('mousemove', '.field', function(event){
 			var $target = $(event.currentTarget);
 			var id = $target.attr('id');
 			id = id.split('_');

			that.dataBlock = mapController.getBlock(id[0], id[1]);

			that.renderBlockData();
 		});
 	};

	this.renderBlockData = function(){
		var $container = $('#data');

		$container.empty();

		$container.append('<div>{</div>');

		for (key in that.dataBlock) {
				$container.append('<div>' + key + ': ' + that.dataBlock[key] + '</div>');
		}

		$container.append('<div>}</div>');
 	};

	this.handleToolbar = function(){
 		$('body').on('mousedown', '.toolbarBlockContainer', function(event){
 			var $target = $(event.currentTarget);
 			
 			that.selectedBlock = $target.attr('number');
 			that.renderToolbar();
 		});
 	};

 	this.renderToolbar = function(){
 		var $toolbar = $('#toolbar');
 		$toolbar.empty();

 		var i = 0;
 		var max = that.toolbarBlocks.length;

 		while(i < max){
 			let $container = $('<div>');
 			$container.attr('class', 'toolbarBlockContainer blockSelectClickable')
 			$container.attr('number', i);

 			if(that.selectedBlock == i){
 				$container.addClass('toolbarBlockSelected');
 			}

      let $block = $('<div>');
      setTexture($block, that.toolbarBlocks[i].texture)
			$block.attr('class', 'toolbarBlock')

			$container.append($block);

      if(that.toolbarBlocks[i].quantity){
			  let $quantityEl = $('<div>' + that.toolbarBlocks[i].quantity + '</div>');
			  $container.append($quantityEl);
      }
			
			$toolbar.append($container);

 			i++
 		}
 	};

 	this.initialize();

 	return this;
});
