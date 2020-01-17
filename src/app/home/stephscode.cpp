#include <CapacitiveSensor.h>
// The Leds that will each be assigned to an output
int led_pin_8 = 8; //change '42' to any desired pin...
int led_pin_9 = 9;
int led_pin_10 = 10;
int led_pin_11 = 11;
int led_pin_12 = 12;
int led_pin_13 = 13;
long time_led_8 = 0;
long time_led_9 = 0;
long time_led_10 = 0;
long time_led_11 = 0;
long time_led_12 = 0;
long time_led_13 = 0;
//Changes the current state
int state_led_8 = HIGH;
int state_led_9 = HIGH;
int state_led_10 = HIGH;
int state_led_11 = HIGH;
int state_led_12 = HIGH;
int state_led_13 = HIGH;
// current state of LED
boolean yes_led_8;
boolean yes_led_9;
boolean yes_led_10;
boolean yes_led_11;
boolean yes_led_12;
boolean yes_led_13;
//The state before for the LED
boolean previous_led_8 = false;
boolean previous_led_9 = false;
boolean previous_led_10 = false;
boolean previous_led_11 = false;
boolean previous_led_12 = false;
boolean previous_led_13 = false;
int debounce = 200;
//CapacitiveSensor   cs_4_2 = CapacitiveSensor(1,2);        // 10M resistor between pins 4 & 2, pin 2 is sensor pin, add a wire and or foil if desired
//Sensors and their designated pins. There are six sensors and they all share pin 1 as input put have unique outputs
CapacitiveSensor cs_1_2 = CapacitiveSensor(1, 2); // 10M resistor between pins 1 & 2, pin 2 is sensor pin, add a wire and or foil
CapacitiveSensor cs_1_3 = CapacitiveSensor(1, 3); // 10M resistor between pins 1 & 3, pin 3 is sensor pin, add a wire and or foil
CapacitiveSensor cs_1_4 = CapacitiveSensor(1, 4); // 10M resistor between pins 1 & 4, pin 4 is sensor pin, add a wire and or foil
CapacitiveSensor cs_1_5 = CapacitiveSensor(1, 5); // 10M resistor between pins 1 & 5, pin 5 is sensor pin, add a wire and or foil
CapacitiveSensor cs_1_6 = CapacitiveSensor(1, 6); // 10M resistor between pins 1 & 6, pin 6 is sensor pin, add a wire and or foil
CapacitiveSensor cs_1_7 = CapacitiveSensor(1, 7); // 10M resistor between pins 1 & 7, pin 7 is sensor pin, add a wire and or foil
void setup()
{
    cs_1_2.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_8, OUTPUT);
    cs_1_3.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_9, OUTPUT);
    cs_1_4.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_10, OUTPUT);
    cs_1_5.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_11, OUTPUT);
    cs_1_6.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_12, OUTPUT);
    cs_1_7.set_CS_AutocaL_Millis(0xFFFFFFFF); //Calibrate the sensor...
    pinMode(led_pin_13, OUTPUT);
}
void loop()
{
    long total1 = cs_1_2.capacitiveSensor(30);
    long total2 = cs_1_3.capacitiveSensor(30);
    long total3 = cs_1_4.capacitiveSensor(30);
    long total4 = cs_1_5.capacitiveSensor(30);
    long total5 = cs_1_6.capacitiveSensor(30);
    long total6 = cs_1_7.capacitiveSensor(30);
    //Total 1:
    if (total1 > 60)
    {
        yes_led_8 = true;
    }
    else
    {
        yes_led_8 = false;
    }
    // to toggle the state of state
    if (yes_led_8 == true && previous_led_8 == false && millis() - time_led_8 > debounce)
    {
        if (state_led_8 == LOW)
        {
            state_led_8 = HIGH;
        }
        else
            state_led_8 = LOW;
        time_led_8 = millis();
    }
    //Total 2:
    if (total2 > 60)
    {
        yes_led_9 = true;
    }
    else
    {
        yes_led_9 = false;
    }
    // to toggle the state of state
    if (yes_led_9 == true && previous_led_9 == false && millis() - time_led_9 > debounce)
    {
        if (state_led_9 == LOW)
        {
            state_led_9 = HIGH;
        }
        else
            state_led_9 = LOW;
        time_led_9 = millis();
    }
    //Total 3:
    if (total3 > 60)
    {
        yes_led_10 = true;
    }
    else
    {
        yes_led_10 = false;
    }
    // to toggle the state of state
    if (yes_led_10 == true && previous_led_10 == false && millis() - time_led_10 > debounce)
    {
        if (state_led_10 == LOW)
        {
            state_led_10 = HIGH;
        }
        else
            state_led_10 = LOW;
        time_led_10 = millis();
    }
    //Total 4:
    if (total4 > 60)
    {
        yes_led_11 = true;
    }
    else
    {
        yes_led_11 = false;
    }
    // to toggle the state of state
    if (yes_led_11 == true && previous_led_11 == false && millis() - time_led_11 > debounce)
    {
        if (state_led_11 == LOW)
        {
            state_led_11 = HIGH;
        }
        else
            state_led_11 = LOW;
        time_led_11 = millis();
    }
    //Total 5:
    if (total5 > 60)
    {
        yes_led_12 = true;
    }
    else
    {
        yes_led_12 = false;
    }
    // to toggle the state of state
    if (yes_led_12 == true && previous_led_12 == false && millis() - time_led_12 > debounce)
    {
        if (state_led_12 == LOW)
        {
            state_led_12 = HIGH;
        }
        else
            state_led_12 = LOW;
        time_led_12 = millis();
    }
    //Total 6
    if (total6 > 60)
    {
        yes_led_13 = true;
    }
    else
    {
        yes_led_13 = false;
    }
    // to toggle the state of state
    if (yes_led_13 == true && previous_led_13 == false && millis() - time_led_13 > debounce)
    {
        if (state_led_13 == LOW)
        {
            state_led_13 = HIGH;
        }
        else
            state_led_13 = LOW;
        time_led_13 = millis();
    }
    // Changes depending on past state:
    if (total1 > 60)
    {
        digitalWrite(led_pin_8, state_led_8);
        previous_led_8 = yes_led_8;
    }
    if (total2 > 60)
    {
        digitalWrite(led_pin_9, state_led_9);
        previous_led_9 = yes_led_9;
    }
    if (total3 > 60)
    {
        digitalWrite(led_pin_10, state_led_10);
        previous_led_10 = yes_led_10;
    }
    if (total4 > 60)
    {
        digitalWrite(led_pin_11, state_led_11);
        previous_led_11 = yes_led_11;
    }
    if (total5 > 60)
    {
        digitalWrite(led_pin_12, state_led_12);
        previous_led_12 = yes_led_12;
    }
    if (total6 > 60)
    {
        digitalWrite(led_pin_13, state_led_13);
        previous_led_13 = yes_led_13;
    }
    //Serial.println(millis()-time);
    //delay(10);
}