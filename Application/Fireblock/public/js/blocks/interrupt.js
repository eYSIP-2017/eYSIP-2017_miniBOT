'use strict';

goog.provide('Blockly.Blocks.interrupts');

goog.require('Blockly.Blocks');

Blockly.Blocks.interrupts.HUE = 290;

Blockly.Blocks['int_serv_routine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ISR")
        //.appendField(new Blockly.FieldTextInput("vector"), "VECTOR")
        .appendField(new Blockly.FieldDropdown([["Xbee_RX","Xbee_RX"], ["Bluetooth_RX","Bluetooth_RX"], ["Interrupt_switch","Interrupt_switch"]]), "VECTOR")
        //.appendField(new Blockly.FieldTextInput("attribute"), "ATTR");
    this.appendStatementInput("BLOC")
        .setCheck(null);
    this.setColour(290);  
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Blockly.Blocks['int_signal'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("SIGNAL")
//         .appendField(new Blockly.FieldDropdown([["Xbee_TX","Xbee_TX"], ["Xbee_RX","Xbee_RX"], ["Bluetooth_TX","Bluetooth_TX"], ["Bluetooth_RX","BlueTooth_RX"], ["Interrupt_switch","Interrupt_switch"]]), "VECTOR")
//         //.appendField(new Blockly.FieldTextInput("vector"), "VECTOR");

//     this.appendStatementInput("BLOC")
//         .setCheck(null);
//     this.setColour(290);  
//     this.setTooltip('');
//     this.setHelpUrl('http://www.example.com/');
//   }
// };
//Blockly.FieldDropdown([["Xbee_TX","Xbee_TX"], ["Xbee_RX","Xbee_RX"], ["Bluetooth_TX","Bluetooth_TX"], ["Bluetooth_RX","BlueTooth_RX"], ["Interrupt_switch","Interrupt_switch"]]), "ISR_drop")