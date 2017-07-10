

	
goog.provide('Blockly.Firebird.motion');

goog.require('Blockly.Firebird');





Blockly.Firebird['motion'] = function(block) {
  var operator = block.getFieldValue('motion');
  var code;
  Blockly.Firebird.definitions_['motionset_function']= 'void motion_set (unsigned char Direction)\n{\n\tunsigned char PortARestore = 0;\n\tDirection &= 0x0F;      // removing upper nibbel as it is not needed\n\tPortARestore = PORTA;       // reading the PORTAs original status\n\tPortARestore &= 0xF0;       // setting lower direction nibbel to 0\n\tPortARestore |= Direction;  // adding lower nibbel for direction command and restoring the PORTA status\n\tPORTA = PortARestore;       // setting the command to the port\n}\n';
   switch (operator) {
    case 'forward':
      code = 'forward();\n';
      Blockly.Firebird.definitions_['forward_function']= 'void forward(void)\n{\n\tmotion_set(0x06);\n}\n';
      break;
    case 'back':
      code = 'back();\n';
      Blockly.Firebird.definitions_['back_function']= 'void back(void)\n{\n\tmotion_set(0x09);\n}\n';
      break;
    case 'stop':
      code = 'stop();\n';
      Blockly.Firebird.definitions_['stop_function']= 'void stop(void)\n{\n\tmotion_set(0x00);\n}\n';
      break;
  }
  
  return (code);
};

Blockly.Firebird['turn'] = function(block) {
  var operator = block.getFieldValue('turn');
  var code;
  Blockly.Firebird.definitions_['motionset_function']= 'void motion_set (unsigned char Direction)\n{\n\tunsigned char PortARestore = 0;\n\tDirection &= 0x0F;      // removing upper nibbel as it is not needed\n\tPortARestore = PORTA;       // reading the PORTAs original status\n\tPortARestore &= 0xF0;       // setting lower direction nibbel to 0\n\tPortARestore |= Direction;  // adding lower nibbel for direction command and restoring the PORTA status\n\tPORTA = PortARestore;       // setting the command to the port\n}\n';
   switch (operator) {
    case 'right':
      code = 'right();\n';
      Blockly.Firebird.definitions_['right_function']= 'void right (void)\n{\n\tmotion_set(0x0A);\n}\n';
      break;
    case 'left':
      code = 'left();\n';
      Blockly.Firebird.definitions_['left_function']= 'void left (void)\n{\n\tmotion_set(0x05);\n}\n';
      break;
    
  }
  
  return (code);
};

Blockly.Firebird['soft_turn'] = function(block) {
  var operator = block.getFieldValue('turn');
  var code;
  Blockly.Firebird.definitions_['motionset_function']= 'void motion_set (unsigned char Direction)\n{\n\tunsigned char PortARestore = 0;\n\tDirection &= 0x0F;      // removing upper nibbel as it is not needed\n\tPortARestore = PORTA;       // reading the PORTAs original status\n\tPortARestore &= 0xF0;       // setting lower direction nibbel to 0\n\tPortARestore |= Direction;  // adding lower nibbel for direction command and restoring the PORTA status\n\tPORTA = PortARestore;       // setting the command to the port\n}\n';
   switch (operator) {
    case 'soft_right':
      code = 'soft_right();\n';
      Blockly.Firebird.definitions_['soft_right_function']= 'void soft_right (void)\n{\n\tmotion_set(0x02);\n}\n';
      break;
    case 'soft_left':
      code = 'soft_left();\n';
      Blockly.Firebird.definitions_['soft_left_function']= 'void soft_left (void)\n{\n\tmotion_set(0x04);\n}\n';
      break;
    
  }
  return (code);
};

Blockly.Firebird['back_turn'] = function(block) {
  var operator = block.getFieldValue('turn');
  var code;
  Blockly.Firebird.definitions_['motionset_function']= 'void motion_set (unsigned char Direction)\n{\n\tunsigned char PortARestore = 0;\n\tDirection &= 0x0F;      // removing upper nibbel as it is not needed\n\tPortARestore = PORTA;       // reading the PORTAs original status\n\tPortARestore &= 0xF0;       // setting lower direction nibbel to 0\n\tPortARestore |= Direction;  // adding lower nibbel for direction command and restoring the PORTA status\n\tPORTA = PortARestore;       // setting the command to the port\n}\n';
   switch (operator) {
    case 'back_right':
      code = 'soft_right_2();\n';
      Blockly.Firebird.definitions_['soft_right_2_function']= 'void soft_right_2 (void)\n{\n\tmotion_set(0x08);\n}\n';
      break;
    case 'back_left':
      code = 'soft_left_2();\n';
      Blockly.Firebird.definitions_['soft_left_2_function']= 'void soft_left_2 (void)\n{\n\tmotion_set(0x01);\n}\n';
      break;
    
  }
  
  return (code);
};


Blockly.Firebird['velocity'] = function(block) {
  var left = Blockly.Firebird.valueToCode(block,"left",
      Blockly.Firebird.ORDER_ATOMIC)|| '255';
  var right = Blockly.Firebird.valueToCode(block,"right",
      Blockly.Firebird.ORDER_ATOMIC)|| '255';
  Blockly.Firebird.definitions_['velocity_function']= 'void velocity (unsigned char left_motor, unsigned char right_motor)\n{\n\tOCR5AL = (unsigned char)left_motor;\n\tOCR5BL = (unsigned char)right_motor;\n}\n';
  Blockly.Firebird.definitions_['init_ports1']= 'void init_ports()\n\t{\n\tmotion_pin_config();\n\t}'
  Blockly.Firebird.definitions_['init_devices1']= 'void init_devices (void) //use this function to initialize all devices\n\t{\n\tcli(); //disable all interrupts\n\tinit_ports();\n\tvel_timer5_init();\n\tsei(); //re-enable interrupts\n\t}'
  Blockly.Firebird.definitions_['init_timer51']= 'void timer5_init()\n\t{\n\tTCCR5B = 0x00;  \n\tTCNT5H = 0xFF;  \n\tTCNT5L = 0x01;  \n\tOCR5AH = 0x00;  \n\tOCR5AL = 0xFF;  \n\tOCR5BH = 0x00;  \n\tOCR5BL = 0xFF;  \n\tOCR5CH = 0x00;  \n\tOCR5CL = 0xFF;  \n\tTCCR5A = 0xA9;  \n\tTCCR5B = 0x0B; \n\t}'
  code = 'void velocity (unsigned char left_motor, unsigned char right_motor);\nvoid init_ports();\nvoid init_devices (void);\nvoid timer5_init();\n';
  return (code);
  //return "velocity("+left+","+right+");";
};

Blockly.Firebird['servomotor'] = function(block) {
  var dropdown_servo_motor = block.getFieldValue('servo_motor');
  var value_servo = Blockly.Firebird.valueToCode(block, 'servo', Blockly.Firebird.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  var arg1;
  var arg2;  
      arg1 = Blockly.Firebird.valueToCode(block, 'servo',
        Blockly.Firebird.ORDER_MULTIPLICATIVE) || '0';
      arg2 = Blockly.Firebird.valueToCode(block, 'servo123',
        Blockly.Firebird.ORDER_MULTIPLICATIVE) || '0';

  switch (dropdown_servo_motor) {
    case 'servo1':
      code = '\n\t for (i = '+arg1+'; i <'+arg2+'; i++)\n\t {\n\t  servo_1(i);\n\t  _delay_ms(30);\n\t }\n\t';
      Blockly.Firebird.definitions_['srvomotion']= 'void servo_1(unsigned char degrees)  \n\t{\n\t float PositionPanServo = 0;\n\t  PositionPanServo = ((float)degrees / 1.86) + 35.0;\n\t OCR1AH = 0x00;\n\t OCR1AL = (unsigned char) PositionPanServo;\n\t}';
      break;
    case 'servo2':
      code = '\n\t for (i = '+arg1+'; i <'+arg2+'; i++)\n\t {\n\t  servo_2(i);\n\t  _delay_ms(30);\n\t }\n\t';
      Blockly.Firebird.definitions_['srvomotion1']= 'void servo_2(unsigned char degrees)  \n\t{\n\t float PositionPanServo = 0;\n\t  PositionPanServo = ((float)degrees / 1.86) + 35.0;\n\t OCR1BH = 0x00;\n\t OCR1BL = (unsigned char) PositionPanServo;\n\t}';
      
      break;
    case 'servo3':
      code = '\n\t for (i = '+arg1+'; i <'+arg2+'; i++)\n\t {\n\t  servo_3(i);\n\t  _delay_ms(30);\n\t }\n\t';
      Blockly.Firebird.definitions_['srvomotion2']= 'void servo_3(unsigned char degrees)  \n\t{\n\t float PositionPanServo = 0;\n\t  PositionPanServo = ((float)degrees / 1.86) + 35.0;\n\t OCR1CH = 0x00;\n\t OCR1CL = (unsigned char) PositionPanServo;\n\t}';      
      break;
   
  }
  return code;
};
Blockly.Firebird['motorservo'] = function(block) {
  var dropdown_drop_servo = block.getFieldValue('drop_servo');
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_drop_servo) {
    case 'servo1':
      code = 'servo_1_free();';
      Blockly.Firebird.definitions_['srvofree']= 'void servo_1_free (void) \n\t{\n\tOCR1AH = 0x03; \n\t OCR1AL = 0xFF; \n\t}';
      break;
    case 'servo2':
      code = 'servo_2_free();';
      Blockly.Firebird.definitions_['srvofree1']= 'void servo_2_free (void) \n\t{\n\tOCR1BH = 0x03; \n\t OCR1BL = 0xFF; \n\t}';
      
      break;
    case 'servo3':
      code = 'servo_3_free();';
      Blockly.Firebird.definitions_['srvofree2']= 'void servo_3_free (void) \n\t{\n\tOCR1CH = 0x03; \n\t OCR1CL = 0xFF; \n\t}';      
      break;
   
  }


  return code;
};
