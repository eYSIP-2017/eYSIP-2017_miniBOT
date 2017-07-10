'use strict';

goog.provide('Blockly.Blocks.speaker1');

goog.require('Blockly.Blocks');


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