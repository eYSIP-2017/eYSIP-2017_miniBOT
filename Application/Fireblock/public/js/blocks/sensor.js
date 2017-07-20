'use strict';		
goog.provide('Blockly.Firebird.sensor');

goog.require('Blockly.Firebird');


Blockly.Blocks['sensor_white'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["middle", "center"], ["left", "left"], ["right", "right"]]), "line_sensor")
        .appendField("white line sensor");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_sharp'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["front", "fr"], ["left", "lf"], ["right", "rf"], ["left_diagonal", "ld"], ["rihgt_diagonal", "rd"]]), "sharp")
        .appendField("sharp sensor");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_ir'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["front", "ADC_Conversion(6)"], ["left", "ADC_Conversion(4)"], ["right", "ADC_Conversion(8)"], ["front_left", "ADC_Conversion(5)"], ["front_right", "ADC_Conversion(7)"], ["back", "spi_master_tx_and_rx(6)"], ["back_left", "spi_master_tx_and_rx(7)"], ["back_right", "spi_master_tx_and_rx(5)"]]), "ir")
        .appendField("IR sensor");
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['sensor_tsop'] = {
  init: function() {
    this.appendDummyInput()
        //.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("TSOP");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('Press remote button');
    this.setHelpUrl('');
  }
};
/*
Blockly.Blocks['sensor_xbee'] = {
  init: function() {
    this.appendDummyInput()
        //.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("XBEE");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        //.setAlign(Blockly.ALIGN_CENTRE)
        .appendField("BLUETOOTH");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('Switch on Bluetooth');
    this.setHelpUrl('');
  }
};*/
