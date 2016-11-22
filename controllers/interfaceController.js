var interfaceController = new(function(){
 	var that = this;

	this.selectedBlock = 0;
	this.toolbarBlocks = [];

 	this.initialize = function(){
 		that.handleMap();
 		that.handleToolbar();
 		that.createStacks();

 		that.renderToolbar();
 	};

 	this.createStacks = function(){
 	  that.toolbarBlocks.push(new Stack(new Hand(), 1));
 	  that.toolbarBlocks.push(new Stack(new DirtBlock(), 64));
 	  that.toolbarBlocks.push(new Stack(new WoodBlock(), 64));
 	  that.toolbarBlocks.push(new Stack(new TulipBlock(), 1));
 	  that.toolbarBlocks.push(new Stack(new CreeperBlock(), 1));
 	  that.toolbarBlocks.push(new Stack(new QuartzBlock(), 1));
 	};

 	this.handleMap = function(){
 		document.body.onmousedown = function(event){
 			var target = event.target;
 			if(target.className != 'field'){
 				return;
 			}
 			var id = target.id;
 			id = id.split('_');

 			var stack = that.toolbarBlocks[that.selectedBlock];

 			if(stack.getOne()){
   			var className = stack.item.type.capitalize() + 'Block';
   			mapController.changeBlockByTypeAndCoords(id[1], id[0], new window[className]());
   			that.renderToolbar();
 			}

 		};

 	};

	this.handleToolbar = function(){
 		document.querySelector('#toolbar').onmousedown = function(event){
 			var target = event.target;
 			if(!target.classList.contains('blockSelectClickable')){
 				return;
 			}
 			
 			that.selectedBlock = target.getAttribute('number');
 			that.renderToolbar();

 		};

 	};

 	this.renderToolbar = function(){
 		var toolbar = document.querySelector('#toolbar');
 		toolbar.innerHTML = '';

 		var i = 0;
 		var max = that.toolbarBlocks.length;

 		while(i < max){
 			var container = document.createElement('div');
 			container.className = 'toolbarBlockContainer blockSelectClickable';
 			container.setAttribute('number', i);

 			if(that.selectedBlock == i){
 				container.classList.add('toolbarBlockSelected');
 			}

			var block = document.createElement('div');
			block.className = 'toolbarBlock blockSelectClickable';
			block.setAttribute('number', i);
			block.style.backgroundImage = "url(" + TEXTURES_PATH + that.toolbarBlocks[i].item.type + ".bmp)";
			container.appendChild(block);

			var text = document.createTextNode(that.toolbarBlocks[i].quantity);
			container.appendChild(text);
			
			toolbar.appendChild(container);

 			i++
 		}
 	};

 	this.initialize();

 	return this;
});
