/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");
var blocklyArea = document.getElementById('code');
var blocklyDiv = document.getElementById('blockly');

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject(blocklyDiv, options);
workspace.addChangeListener(Blockly.Events.disableOrphans);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

/* place workspace */
var onresize = function(e) {
	// Compute the absolute coordinates and dimensions of blocklyArea.
	var element = blocklyArea;
	var x = 0;
	var y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	} while (element);
	// Position blocklyDiv over blocklyArea.
	blocklyDiv.style.left = x + 'px';
	blocklyDiv.style.top = y + 'px';
	blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
	blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

/* execute the associated code */
$("#run").click(function(){
	/* first hide current speech block */
	$("#speech").hide("slow", function(){
		/* fire it as a callback */
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		try {
			eval(code);
			// passed the test, now what...
		} catch (e) {
		    // failed so show the error
		    alert(e);
		}
	});
});

$("#reset").click(function(){
	/* first hide text */
	$("#speech").hide("slow", function(){
		/* TODO */

		/*var leftpos = $("#character").position().left - $("#display").position().left;
		var toppos = $("#character").position().top - $("#display").position().top;
		// go to left first
		$( "#character" ).animate({
			left: "-= " + leftpos
		}, {
			duration: 500,
		});
		$( "#character" ).animate({
			top: "-=" + toppos
		}, {
			duration: 500,
		});
		// then to the top
		$( "#character" ).animate({
			left: "-= " + leftpos
		}, {
			duration: 500,
		});*/
	});
});

/* set the character to be draggable */
$("#character").draggable({
	revert: "invalid"
});
/* if the character is dropped in other place then came back to initial place */
$("#display").droppable({});