**Tasin Hasan's CPEN 212 Note Transcriber**

This is a simple device that takes your handwritten notes and transcribes them to text on screen. It is very useful if you need to back up your notes onto the computer,
or if you want your notes to look nicer. The device can be directly controlled from the web app, meaning you can back up your notes onto any machine just by accessing the
website the web app is hosted on, so long as you follow these simple installation steps below.

**MATERIALS REQUIRED**
- At least 8 pairs of chopsticks
- 1 medium size cardboard box
- ItsyBitsy M4 Express, or other similar microcontroller that can run circuitpython
- 3 servo motors
- 1 Wheel that can attach to the servo motor
- An android device
- A tripod, or other suitable structure that can support the android device when taking photos

**Setting up the page turning device**
Once you build the page turning device as per this picture below (insert below), you will need to set up circuitpython on your machine. Please follow this link to do so
https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython

(NOTE: The wiring in the photo is for the ports on the ItsyBitsy M4 Express. All wires are connected to ports that can support PWM.
If not using ItsyBitsy M4 Express, be sure to follow the specifications for your particular microcontroller when wiring, specifically regarding which ports can be used for PWM.)

Then load the code.py in the repository into your circuitpython device. 

After setting up circuitpython, you will need to go to the bot_server.py file in the flask-server folder, 
and modify some lines of code (indicated with a comment that says PLEASE CHANGE TO CORRECT FILE PATH OF YOUR CIRCUITPYTHON CODE).
You will need to go to your circuitpython drive and locate your code.py file, then copy the path to it and replace the original path with it. Normally, if using windows,
the default path should work, but do the above step just to be sure

**Setting up adb to take photos**
Install ADB tool by following this link
https://developer.android.com/studio/command-line/adb

Ensure all python packages are properly installed  Pay attention to the specific package names(ex: ppadb = pip install pure-python-adb, not pip install ppadb)

Then connect your android device to the computer. Make sure you turn on developer mode on your android device (refer to your device's documentation if unsure how to do that)
Then if prompted for use "USB connection to:", select "Transfer Photos". When a prompt to enable USB debugging appears, select the option to allow USB debugging (VERY IMPORTANT TO DO THIS!)

Then, open up a terminal window or the command prompt, and navigate to the directory where you installed the ADB tool. Lastly run adb devices, and ensure your device is listed

This will start the ADB client, which will allow the python code for taking photos in bot_server.py to work.
