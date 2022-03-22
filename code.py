# imports for setting up the servo
from binascii import a2b_base64
import board
import pwmio
from digitalio import DigitalInOut
import simpleio
from audiocore import RawSample
from adafruit_motor import servo

# imports for LCD display
import terminalio
import displayio
from adafruit_display_text import label
from adafruit_st7735r import ST7735R

# import for setting up the keypad
import adafruit_matrixkeypad

#additional imports
import math
import array
import random
import time

#defines pins for each leg, foot and the speaker
elbowPin = board.D7
shoulderPin = board.D5
wheelPin = board.D2

class PageTurner:
    def __init__(self):
        """ constructor for Movement class, initializes the servo objects"""
        # define PWMOut objects
        pwmE = pwmio.PWMOut(elbowPin, duty_cycle=2 ** 15, frequency=50)
        pwmS = pwmio.PWMOut(shoulderPin, duty_cycle=2 ** 15, frequency=50)
        pwmW = pwmio.PWMOut(wheelPin, frequency=50)

        # define servo objects
        self.e = servo.Servo(pwmE)
        self.s = servo.Servo(pwmS)
        self.w = servo.ContinuousServo(pwmW)

        # reset the angles for each servo
        self.s.angle = 30
        self.e.angle = 120
        time.sleep(1)

    def loop(self):
        while true:
            self.w.throttle = 1.0
            time.sleep(1)
            self.w.throttle = 0.0
            for angle in range(0,60,3): #must be integer
                movement.s.angle = 30 + angle
                movement.e.angle = 120 - angle
                time.sleep(0.05)

            for angle in range(0,60,3):
                movement.e.angle = 60 + angle
                time.sleep(0.05)
            for angle in range(60,0,-3):
                movement.e.angle = 60 + angle
                time.sleep(0.05)

            for angle in range(60,0,-3):
                movement.s.angle = 30 + angle
                movement.e.angle = 120 - angle
                time.sleep(0.05)




if __name__ == "__main__":
    movement = PageTurner()
    movement.loop()
