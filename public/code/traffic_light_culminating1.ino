// C++ code
//
#include <LiquidCrystal.h>

LiquidCrystal lcd(13, 12, 4, 5, 6, 7);

const int vehicleGreen = 11;
const int vehicleYellow = 10;
const int vehicleRed = 9;
const int pedestrianRed = 8;
const int pedestrianGreen = 3;

const int buttonPin = 2;

volatile bool buttonPressed = false;

void setup() {
  
  lcd.begin(16, 2);

  pinMode(vehicleGreen, OUTPUT);
  pinMode(vehicleYellow, OUTPUT);
  pinMode(vehicleRed, OUTPUT);
  pinMode(pedestrianRed, OUTPUT);
  pinMode(pedestrianGreen, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP);

 
  attachInterrupt(digitalPinToInterrupt(buttonPin), buttonISR, FALLING);

  resetLights();

  lcd.setCursor(0, 0);
  lcd.print("Pedestrian Lights");
  lcd.setCursor(0, 1);
  lcd.print("Press Button");
}

void loop() {
  if (buttonPressed) {
    buttonPressed = false; 

    pedestrianWalkSequence();

    resetLights();
  }
}

void buttonISR() {
  buttonPressed = true;
}

void pedestrianWalkSequence() {
  digitalWrite(vehicleGreen, LOW);
  digitalWrite(vehicleYellow, LOW);
  digitalWrite(vehicleRed, HIGH);
  digitalWrite(pedestrianRed, HIGH);
  digitalWrite(pedestrianGreen, LOW);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Don\'t Walk");

  delay(2000); 
  digitalWrite(vehicleRed, LOW);
  digitalWrite(vehicleGreen, HIGH);
  digitalWrite(pedestrianRed, LOW);
  digitalWrite(pedestrianGreen, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Pedestrians WALK");

  delay(5000); 

  for (int i = 0; i < 5; i++) {
    digitalWrite(pedestrianGreen, LOW);
    delay(500);
    digitalWrite(pedestrianGreen, HIGH);
    delay(500);
  }

  digitalWrite(pedestrianGreen, LOW);
  digitalWrite(pedestrianRed, HIGH);
  digitalWrite(vehicleGreen, LOW);
  digitalWrite(vehicleRed, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Don\'t Walk");

  delay(2000);

  digitalWrite(vehicleRed, LOW);
  digitalWrite(vehicleYellow, HIGH);
  digitalWrite(pedestrianRed, HIGH);
  delay(2000); 
  digitalWrite(vehicleYellow, LOW);

  digitalWrite(vehicleGreen, HIGH);
  digitalWrite(vehicleRed, LOW);
  digitalWrite(pedestrianRed, HIGH);
}

void resetLights() {
  digitalWrite(vehicleGreen, HIGH);
  digitalWrite(vehicleYellow, LOW);
  digitalWrite(vehicleRed, LOW);
  digitalWrite(pedestrianRed, HIGH);
  digitalWrite(pedestrianGreen, LOW);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Pedestrian Lights");
  lcd.setCursor(0, 1);
  lcd.print("Press Button");
}
