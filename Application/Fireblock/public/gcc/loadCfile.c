#define F_CPU 14745600
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include "firebird.h"



int main() {

	init_devices();
	
		 unsigned char i = 0;
		 for (i = 0; i <90; i++)
		 {
		  servo_1(i);
		  _delay_ms(30);
		 }
		
	_delay_ms(1000);
	
		 unsigned char i = 0;
		 for (i = 0; i <90; i++)
		 {
		  servo_1(i);
		  _delay_ms(30);
		 }
		

 return 0;
}