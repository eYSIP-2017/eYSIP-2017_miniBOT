'use strict';

goog.provide('Blockly.Blocks.buzzer');

goog.require('Blockly.Blocks');

Blockly.Blocks['buzzer_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Buzzer On");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['buzzer_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Buzzer Off");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['delay_ms'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("delay_value",'Number')
        .setCheck("Number")
        .appendField("Delay ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('Delay for specific time');
  }
};

Blockly.Blocks['speaker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play")
        .appendField(new Blockly.FieldDropdown([["Music","musical"], ["Happy Birthday","bday"], ["Jingle Bells","jb"], ["Ambulance","ambu"], ["User Sound-1","user1"], ["User Sound-2","user2"], ["User Sound-3","user3"]]), "speaker_drop");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

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
