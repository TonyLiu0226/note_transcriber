from flask import Flask, flash, request, session
import os.path
from flask_cors import CORS, cross_origin
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = '/uploads'
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
    # file = request.files['file'] 
    # f_name = file.filename
    # destination="/".join([target, f_name])
    # file.save(destination)
    # session['uploadFilePath']=destination
    # response="Whatever you wish too return"
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return 'bruh'

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    #run_script()
