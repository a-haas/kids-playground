/* basic step when going forward or backward */
var basicstep = 50;

Blockly.JavaScript['start'] = function(block) {
    var code = "";
    return code;
};

Blockly.JavaScript['forward'] = function(block) {
    var number_steps = block.getFieldValue('steps');
    /* get the current position of the character + the additionnal movement required */
    var newpos = basicstep*number_steps;
    var code = 
        '$( "#character" ).animate({' +
            'left: "+=' + newpos + '"' +
        '}, 500 );'
    ;
    return code;
};

Blockly.JavaScript['backward'] = function(block) {
    var number_steps = block.getFieldValue('steps');
    var newpos = basicstep*number_steps;
    var code = 
        '$( "#character" ).animate({' +
            'left: "-=' + newpos + '"' +
        '}, {' +
            'duration: 500' +
        '});'
    ;
    return code;
};

Blockly.JavaScript['speak'] = function(block) {
    var text_speech = block.getFieldValue('speech');
    var code = 
        '$("#speech").text("'+ text_speech +'");' +
        '$( "#speech" ).show("slow");'
    ;
    return code;
};

Blockly.JavaScript['loop'] = function(block) {
    var number_nb_iter = block.getFieldValue('nb_iter');
    var statements_iteration = Blockly.JavaScript.statementToCode(block, 'iteration');
    var code = 
        'for (var i=0; i < ' + number_nb_iter + '; i++) {' +
            statements_iteration +
        '}'
    ;
    return code;
};

Blockly.JavaScript['up'] = function(block) {
  var number_steps = block.getFieldValue('steps');
    var newpos = basicstep*number_steps;
    var code = 
        '$( "#character" ).animate({' +
            'top: "-=' + newpos + '"' +
        '}, {' +
            'duration: 500' +
        '});'
    ;
    return code;
};

Blockly.JavaScript['bottom'] = function(block) {
    var number_steps = block.getFieldValue('steps');
    var newpos = basicstep*number_steps;
    var code = 
        '$( "#character" ).animate({' +
            'top: "+=' + newpos + '"' +
        '}, {' +
            'duration: 500' +
        '});'
    ;
    return code;
};

Blockly.JavaScript['audio'] = function(block) {
  var dropdown_track = block.getFieldValue('track');
  var code = 'document.getElementById("'+ dropdown_track +'").play()';
  return code;
};