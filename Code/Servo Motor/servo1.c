#define F_CPU 14745600

#include <avr/interrupt.h>
#include <avr/io.h>
#include <util/delay.h>

unsigned char i = 0;
void servo1_pin_config (void)
	{
	DDRB  = DDRB | 0x20;
	PORTB = PORTB | 0x20;
	}
void servo1port_init(void)
	{
	 servo1_pin_config();
	}
void timer1_init(void)
	{
	 TCCR1B = 0x00;
	 TCNT1H = 0xFC;
	 TCNT1L = 0x01;
	 OCR1AH = 0x03;
	 OCR1AL = 0xFF;
	 OCR1BH = 0x03;
	 OCR1BL = 0xFF;
	 OCR1CH = 0x03;
	 OCR1CL = 0xFF;
	 ICR1H  = 0x03;
	 ICR1L  = 0xFF;
	 TCCR1A = 0xAB;
	 TCCR1C = 0x00;
	 TCCR1B = 0x0C;
	}
void servo1_init_devices(void)
	{
	 cli();
	servo1port_init();
	 timer1_init();
	 sei();
	}
void servo_1(unsigned char degrees)
	{
	 float PositionPanServo = 0;
	  PositionPanServo = ((float)degrees / 1.86) + 35.0;
	 OCR1AH = 0x00;
	 OCR1AL = (unsigned char) PositionPanServo;
	}
void servo_1_free (void)
	{
	OCR1AH = 0x03;
	 OCR1AL = 0xFF;
	}


  int main() {
    servo1_init_devices();

    	 for (i = 0; i <90; i++)
    	 {
    	  servo_1(i);
    	  _delay_ms(30);
    	 }
    	_delay_ms(1000);

    	 for (i = 90; i <180; i++)
    	 {
    	  servo_1(i);
    	  _delay_ms(30);
    	 }
    	_delay_ms(1000);
    servo_1_free();
    while(1);
    return 0;
  }
