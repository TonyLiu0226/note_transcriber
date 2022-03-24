# imports for setting up the servo
from binascii import a2b_base64
import board
import pwmio
from digitalio import DigitalInOut
import simpleio
from audiocore import RawSample
from adafruit_motor import servo

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
        self.s.angle = 10
        self.e.angle = 90 
        time.sleep(1)

    def loop(self):
        sleepTime = 0.005
        while True:
            self.w.throttle = 1.0
            time.sleep(1)
            self.w.throttle = 0.0
            for angle in range(0,90,1): #must be integer
                movement.s.angle = 10 + angle
                movement.e.angle = 90 - angle
                time.sleep(sleepTime)

            for angle in range(0,100,1):
                movement.e.angle = 0 + angle
                time.sleep(sleepTime)
            for angle in range(100,0,-1):
                movement.e.angle = 0 + angle
                time.sleep(sleepTime)

            for angle in range(90,0,-1):
                movement.s.angle = 10 + angle
                movement.e.angle = 90 - angle
                time.sleep(sleepTime)




if __name__ == "__main__":
    movement = PageTurner()
    movement.loop()
