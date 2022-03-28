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
    offsetStartS = 15
    offsetStartE = 175
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
        self.reverseScroll()
        for i in range(0,10,1):
            self.s.angle = self.offsetStartS
            self.e.angle = self.offsetStartE
            time.sleep(0.1)

    def loop(self):
        while True:
            self.turnPage()


    def turnPage(self):
        sleepTime = 0.005

        self.scroll()

        #insert arm
        for angle in range(0,120,1): #must be integer
            self.s.angle = self.offsetStartS + angle
            self.e.angle = self.offsetStartE - angle
            time.sleep(sleepTime/2)

        #turn page
        for angle in range(0,73,1):
            self.e.angle = (self.offsetStartE-110) + angle
            time.sleep(sleepTime*5) #sleep longer to wait for page flip
        time.sleep(1)
        for angle in range(73,110,1):
            self.e.angle = (self.offsetStartE-110) + angle
            time.sleep(sleepTime*5)
        self.e.angle=180
        for angle in range(120,0,-1):
            self.s.angle = self.offsetStartS + angle
            time.sleep(sleepTime)
        self.reverseScroll()

    def scroll(self):
        self.w.throttle = 0.2
        time.sleep(0.5)
        self.w.throttle = 0.0
    def reverseScroll(self):
        self.w.throttle = -0.2
        time.sleep(1.0)
        self.w.throttle = 0.0



if __name__ == "__main__":
    movement = PageTurner()
    #movement.loop()


#SETUP:
#reset the shoulder's 0 at -120 degrees
#bottom of wheel servo lines up with bottom of page
#works well starting from 2/3 of notebook (in terms of pages)
