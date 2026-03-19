#include <LiquidCrystal.h>

LiquidCrystal lcd(A2, A1, 4, 5, 6, 7);

const int photoResistorPin = A0;

const int redLEDs[] = {13, 12, 11};
const int yellowLEDs[] = {10, 9, 8};
const int whiteLEDs[] = {A5, A4, A3};

String lastLEDColor = "";

void setup() {
  lcd.begin(16, 2);
  lcd.print("Initializing...");
  delay(2000); 
  for (int i = 0; i < 3; i++) {
    pinMode(redLEDs[i], OUTPUT);
    pinMode(yellowLEDs[i], OUTPUT);
    pinMode(whiteLEDs[i], OUTPUT);
  }
  
  lcd.clear();
  lcd.print("Light Level:");
}

void loop() {
  int lightValue = analogRead(photoResistorPin);  
  String currentColor = "";
  if (lightValue >= 54 && lightValue < 800) {
    currentColor = "Red";
    updateLEDs(redLEDs, true);
    updateLEDs(yellowLEDs, false);
    updateLEDs(whiteLEDs, false);
  } else if (lightValue >= 800 && lightValue < 950) {
    currentColor = "Yellow";
    updateLEDs(redLEDs, false);
    updateLEDs(yellowLEDs, true);
    updateLEDs(whiteLEDs, false);
  } else if (lightValue >= 950) {
    currentColor = "White";
    updateLEDs(redLEDs, false);
    updateLEDs(yellowLEDs, false);
    updateLEDs(whiteLEDs, true);
  }

  if (currentColor != lastLEDColor) {
    lcd.clear();               
    lcd.setCursor(0, 0);        
    lcd.print("Light Level:"); 
    lcd.setCursor(0, 1);        
    lcd.print("LEDs: " + currentColor);  
    lastLEDColor = currentColor;         
  }

  delay(500); 
}

void updateLEDs(const int ledGroup[], bool state) {
  for (int i = 0; i < 3; i++) {
    digitalWrite(ledGroup[i], state ? HIGH : LOW);
  }
}

