#define F_CPU 14745600

#include <avr/interrupt.h>
#include <avr/io.h>
#include <util/delay.h>

void uart0_init(void)
	{
	 UCSR0B = 0x00; //disable while setting baud rate
	 UCSR0A = 0x00;
	 UCSR0C = 0x06;
	 UBRR0L = 0x5F; //set baud rate lo
	 UBRR0H = 0x00; //set baud rate hi
	 UCSR0B = 0x98;
	}
void xbee_init_devices()
	{
	 cli(); //Clears the global interrupts
	 uart0_init(); //Initailize UART0 for serial communiaction
	 sei();   //Enables the global interrupts
	}
volatile unsigned char data[];
void uartTransmit(unsigned int data)
	{
	  while (!( UCSR0A & (1<<UDRE0)));
	  UDR0 = data;
	}


void tranString(char * data)
	{
	  int k=0;
	  while(data[k])
	  {
	    uartTransmit(data[k++]);
	  }
	}

  int main() {
    xbee_init_devices();
    tranString("hello");

    while(1);
    return 0;
  }
