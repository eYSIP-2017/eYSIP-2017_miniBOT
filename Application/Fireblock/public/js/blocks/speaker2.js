'use strict';

goog.provide('Blockly.Blocks.speaker2');

goog.require('Blockly.Blocks');



Blockly.Blocks['rec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Record")
        .appendField(new Blockly.FieldDropdown([["UserSound-1","user1"], ["UserSound-2","user2"], ["UserSound-3","user3"]]), "rec_drop");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};