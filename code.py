# imports for setting up the servo
from binascii import a2b_base64
import board
import pwmio
from adafruit_motor import servo

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
        self.e.angle = 90
        self.s.angle = 90
        time.sleep(1)

    def loop(self):
        while True:
            print("spin")
            self.w.throttle = 0.5
            time.sleep(1)
            print("stop spin")
            self.w.throttle = 0.0
            time.sleep(1.0)
            print("move shoulder")
            self.s.angle = 180
            time.sleep(2.0)
            print("move elbow")
            self.e.angle = 140
            time.sleep(1.0)
            self.e.angle = 90
            time.sleep(1.0)
            self.s.angle = 90
            time.sleep(1.0)



if __name__ == "__main__":
    movement = PageTurner()
    movement.loop()