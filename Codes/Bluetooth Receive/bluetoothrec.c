
#include <avr/interrupt.h>
#include <avr/io.h>
#include <util/delay.h>

volatile unsigned char data;
void motion_set (unsigned char Direction)
{
	unsigned char PortARestore = 0;
	Direction &= 0x0F;      // removing upper nibbel as it is not needed
	PortARestore = PORTA;       // reading the PORTAs original status
	PortARestore &= 0xF0;       // setting lower direction nibbel to 0
	PortARestore |= Direction;  // adding lower nibbel for direction command and restoring the PORTA status
	PORTA = PortARestore;       // setting the command to the port
}

void forward(void)
{
	motion_set(0x06);
}

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
void motion_config (void)
{
	DDRA = DDRA | 0x0F; //set direction of the PORTA 3 to PORTA 0 pins as output
	PORTA = PORTA & 0xF0; // set initial value of the PORTA 3 to PORTA 0 pins to logic 0
	DDRL = DDRL | 0x18;   //Setting PL3 and PL4 pins as output for PWM generation
	PORTL = PORTL | 0x18; //PL3 and PL4 pins are for velocity control using PWM
}


  ISR(USART3_RX_vect){
  data =UDR3;
    if (data == 0x38)
     {
      forward();
    }

  }
  int main() {
    blue_init_devices();
    motion_config();

    while(1);
    return 0;
  }
