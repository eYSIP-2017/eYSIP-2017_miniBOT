'use strict'

goog.provide('Blockly.Firebird.interrupts');

goog.require('Blockly.Firebird');

Blockly.Firebird['int_serv_routine'] = function(block){
	Blockly.Firebird.definitions_['servo1_vari']= 'volatile unsigned char data;';
	var vector = block.getFieldValue('VECTOR');
	//var attribute = block.getFieldValue('ATTR');
	var bloc = Blockly.Firebird.statementToCode(block,'BLOC');
	var code;
	// if(attribute != 'attribute'){
	// 	attribute = ', '+ attribute;
	// }else{
	// 	attribute = '';
	// }
	switch (vector) {
		case 'Xbee_RX':
			code = 'ISR(USART0_RX_vect){\ndata =UDR0;\n'+bloc+'\n}';
			break;
		case 'Bluetooth_RX':
			code = 'ISR(USART3_RX_vect){\ndata =UDR3;\n'+bloc+'\n}';
			break;
		case 'Interrupt_switch':
			code = 'ISR(USART6_RX_vect){\n'+bloc+'\n}';
			break;	
		}
	return code;
};

 // Blockly.Firebird['int_signal'] = function(block){
 // 	var vector = block.getFieldValue('VECTOR');
 // 	var bloc = Blockly.Firebird.statementToCode(block,'BLOC');
 // 	switch (vector) {
	// 	case 'Xbee_TX':
	// 		code = "ISR('USART0_TX_vect'){\n"+bloc+"\n}";
	// 		break;
	// 	case 'Xbee_RX':
	// 		code = "ISR('USART0_RX_vect'){\n"+bloc+"\n}";
	// 		break;
	// 	case 'Bluetooth_TX':
	// 		code = "ISR('USART3_RX_vect'){\n"+bloc+"\n}";
	// 		break;
	// 	case 'Bluetooth_RX':
	// 		code = "ISR('USART3_RX_vect'){\n"+bloc+"\n}";
	// 		break;
	// 	case 'Interrupt_switch':
	// 		code = "ISR('USART6_RX_vect'){\n"+bloc+"\n}";
	// 		break;	
	// 	}
 // 	return code;
 // };



// Blockly.Firebird['inter_up'] = function(block) {
//   var dropdown_isr_drop = block.getFieldValue('ISR_drop');
//   var statements_isr = Blockly.Firebird.statementToCode(block, 'ISR');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };