'use strict';

goog.provide('Blockly.Blocks.communication');

goog.require('Blockly.Blocks');
  
Blockly.Firebird['btr'] = function(block) {
  Blockly.Firebird.definitions_['blue_vari']= 'volatile unsigned char data1[];\n';
  Blockly.Firebird.definitions_['blue_str']= 'void bluetranString(char * data1)\n\t{\n\t  int k=0;\n\t  while(data1[k])\n\t  {\n\t    blueuartTransmit(data1[k++]);\n\t  }\n\t}\n';
  Blockly.Firebird.definitions_['blue_transstr']= 'void blueuartTransmit(unsigned int data1)\n\t{\n\t  while (!( UCSR3A & (1<<UDRE3)));\n\t  UDR3 = data1;\n\t}\n';
  var blue_trans_data = Blockly.Firebird.valueToCode(block, 'commlist4',
      Blockly.Firebird.ORDER_ASSIGNMENT) || '0';
  var code = 'bluetranString('+blue_trans_data+');\n';
  return code;
};


Blockly.Firebird['xtr'] = function(block) {
  Blockly.Firebird.definitions_['xbee_vari']= 'volatile unsigned char data[];\n';
  Blockly.Firebird.definitions_['xbee_str']= 'void tranString(char * data)\n\t{\n\t  int k=0;\n\t  while(data[k])\n\t  {\n\t    uartTransmit(data[k++]);\n\t  }\n\t}\n';
  Blockly.Firebird.definitions_['xbee_transstr']= 'void uartTransmit(unsigned int data)\n\t{\n\t  while (!( UCSR0A & (1<<UDRE0)));\n\t  UDR0 = data;\n\t}\n';
  var xbee_trans_data = Blockly.Firebird.valueToCode(block, 'commlist3',
      Blockly.Firebird.ORDER_ASSIGNMENT) || '0';
  var code = 'tranString('+xbee_trans_data+');\n';
  return code;
};
