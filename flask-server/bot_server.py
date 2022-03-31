from flask import Flask, flash, request, session
import os.path
from flask_cors import CORS, cross_origin
import logging
import glob
from typing import Text
import cv2
from PIL import Image
import pytesseract
from ppadb.client import Client as AdbClient
import time


logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = 'flask-server/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
PHONE_PATH = r'C:\uploadFiles'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/')
def hello():
    return "go to /turnpage to turn page"


@app.route('/turnpage')
def run_script():
    file_exists = os.path.isfile('D:/code.py')

    if file_exists:
        file = open(r'D:/code.py', 'a')
        file.write(' ')
        file.close()
    return "turning page..."

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    target=os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    f_name = file.filename
    destination="/".join([target, f_name])
    file.save(destination)
    text = generateText(f'flask-server/uploads/{f_name}')
    logger.info(file.filename + " saved in: " +destination)
    response= text
    return response

@app.route('/take_photo', methods=['GET'])
def take_photo():
    response = takeAPhoto()
    return response

def generateText(max_file):
    print(max_file)
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    text = pytesseract.image_to_string(Image.open(max_file),lang='eng')

    #open text file
    text_file = open("flask-server/textfiles/data.txt", "w")
 
    #write string to file
    text_file.write(text)
 
    #close file
    text_file.close()

    return(text)


def connect():
    client = AdbClient(host="127.0.0.1", port=5037) # Default is "127.0.0.1" and 5037

    devices = client.devices()

    if len(devices) == 0:
        print('No devices')
        quit()

    device = devices[0]

    print(f'Connected to {device}')

    return device, client

def takeAPhoto():
    # we will open the camera app ourselves
    device, client = connect()
    # wait 2 seconds
    time.sleep(2)

    # take a photo with volume up
    device.shell('input keyevent 24')
    print('Taken a photo!')

    #copies the photo to the screen

    #waits 2 seconds so we can retrieve the newly taken photo
    time.sleep(2)
    device.shell('input keyevent 24')
    #for some reason it will not allow me to upload the most recent file. To go around this, I take a 2nd photo here
    #Then, the original photo will be the 2nd most recent photo, and I can use it to send to screen.png

    #retrieves the photo and uploads it
    filename = device.shell('ls -t /sdcard/DCIM/Camera/')
    txt = filename.split()
    path = (f"/sdcard/DCIM/Camera/{txt[1]}")
    print(path)
    device.pull("/sdcard/DCIM/Camera/" + txt[1], "flask-server/uploads/screen.jpg")
    text = generateText(f'flask-server/uploads/screen.jpg')
    return text


if __name__ == "__main__":
    app.run(debug=True, port=5000)
    #run_script()
