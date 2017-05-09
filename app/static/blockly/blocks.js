Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🏁");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("→")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("←")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['speak'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🗩")
        .appendField(new Blockly.FieldTextInput("Je m'appelle..."), "speech");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['loop'] = {
  init: function() {
    this.appendStatementInput("iteration")
        .setCheck(null)
        .appendField("⟳")
        .appendField(new Blockly.FieldNumber(1, 0), "nb_iter");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("↑")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bottom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("↓")
        .appendField(new Blockly.FieldNumber(1, 0), "steps");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("♫")
        .appendField(new Blockly.FieldDropdown([["chat 1","CAT_TRACK_1"], ["chat 2","CAT_TRACK_2"], ["chat 3","CAT_TRACK_3"], ["chat 4","CAT_TRACK_4"], ["voiture 1","CAR_TRACK_1"], ["voiture 2","CAR_TRACK_2"], ["voiture 3","CAR_TRACK_3"], ["akak","AKAK_TRACK"]]), "track");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};