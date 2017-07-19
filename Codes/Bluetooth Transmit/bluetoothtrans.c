#define F_CPU 14745600

#include <avr/interrupt.h>
#include <avr/io.h>
#include <util/delay.h>

void uart3_init(void)
	{
	 UCSR3B = 0x00; //disable while setting baud rate
	 UCSR3A = 0x00;
	 UCSR3C = 0x06;
	 UBRR3L = 0x5F; //set baud rate lo
	 UBRR3H = 0x00; //set baud rate hi
	 UCSR3B = 0x98;
	}
void blue_init_devices()
	{
	 cli(); //Clears the global interrupts
	 uart3_init(); //Initailize UART3 for serial communiaction
	 sei();   //Enables the global interrupts
	}
volatile unsigned char data1[];

void blueuartTransmit(unsigned int data1)
	{
	  while (!( UCSR3A & (1<<UDRE3)));
	  UDR3 = data1;
	}

void bluetranString(char * data1)
	{
	  int k=0;
	  while(data1[k])
	  {
	    blueuartTransmit(data1[k++]);
	  }
	}




  int main() {
    blue_init_devices();
    bluetranString("hello");

    while(1);
    return 0;
  }
