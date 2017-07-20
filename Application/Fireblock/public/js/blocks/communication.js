'use strict';

goog.provide('Blockly.Blocks.communication');

goog.require('Blockly.Blocks');


Blockly.Blocks['xtr'] = {
  init: function() {
    this.appendValueInput("commlist3")
        .setCheck(["Number", "String"])
        .appendField("Xbee Transmit");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['btr'] = {
  init: function() {
    this.appendValueInput("commlist4")
        .setCheck(["Number", "String"])
        .appendField("Bluetooth transmit");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

