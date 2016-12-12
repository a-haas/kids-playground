/* basic step when going forward or backward */
basicstep = 25;

Blockly.JavaScript['start'] = function(block) {
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  // Execute the next block code
  var follow = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_NONE);
  // just closure it (nothing else to add atm)
  var code = follow;
  return code;
};

Blockly.JavaScript['forward'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  var value_follow = Blockly.JavaScript.valueToCode(block, 'follow', Blockly.JavaScript.ORDER_NONE);
  /* get the current position of the character + the additionnal movement required */
  var newpos = basicstep*number_steps;
  // TODO: Assemble JavaScript into code variable.
  var code = 
  '$( "#character" ).animate({' +
    'left: "+=' + newpos + '"' +
  '}, {' +
    'duration: 500,' +
  '});' + value_follow;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['backward'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  var value_steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var newpos = basicstep*number_steps;
  // TODO: Assemble JavaScript into code variable.
  var code = 
  '$( "#character" ).animate({' +
    'left: "-=' + newpos + '"' +
  '}, {' +
    'duration: 500,' +
  '});' + value_steps;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speak'] = function(block) {
  var text_speech = block.getFieldValue('speech');
  var value_speech = Blockly.JavaScript.valueToCode(block, 'speech', Blockly.JavaScript.ORDER_NONE);
  var code = 
  '$("#speech").text("'+ text_speech +'");' +
  '$( "#speech" ).show("slow");' + value_speech;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};