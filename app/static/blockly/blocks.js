Blockly.Blocks['start'] = {
  init: function() {
    this.appendValueInput("start")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("start");
    this.setInputsInline(false);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendValueInput("follow")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("=>")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("<=")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['speak'] = {
  init: function() {
    this.appendValueInput("speech")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldTextInput("Je m'appelle..."), "speech");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};