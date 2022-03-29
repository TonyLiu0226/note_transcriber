from flask import Flask, flash, request, session
import os.path
from flask_cors import CORS, cross_origin
import logging
import glob
from typing import Text
import cv2
from PIL import Image
import pytesseract

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = 'flask-server/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/')
def hello():
    return "go to /turnpage to turn page"
@app.route('/turnpage')
def run_script():
    file_exists = os.path.isfile('/Volumes/CIRCUITPY/code.py')

    if file_exists:
        file = open(r'/Volumes/CIRCUITPY/code.py', 'a')
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
    # session['uploadFilePath']=destination #this is causing problem, idk why lmao
    response= text
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


if __name__ == "__main__":
    app.run(debug=True, port=5000)
    #run_script()
