import time

from ppadb.client import Client as AdbClient

def connect():
    client = AdbClient(host="127.0.0.1", port=5037) # Default is "127.0.0.1" and 5037

    devices = client.devices()

    if len(devices) == 0:
        print('No devices')
        quit()

    device = devices[0]

    print(f'Connected to {device}')

    return device, client

if __name__ == '__main__':
    device, client = connect()

    # we will open the camera app ourselves
    
    # wait 5 seconds
    time.sleep(5)

    # take a photo with volume up
    device.shell('input keyevent 24')
    print('Taken a photo!')
    
    """
    To enable the ADB, your device must firstly have Developer Options unlocked and USB debugging enabled. 
    To unlock developer options, you can go to your devices settings and scroll down to the about section and find the build number
    of the current software which is on the device. Click the build number 7 times and Developer Options will be enabled. 
    Then you can go to the Developer Options panel in the settings and enable USB debugging from there.
    Now the only other thing you need is a USB cable to connect your device to your computer.
    """
