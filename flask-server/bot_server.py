from flask import Flask, flash, request, session
import os.path
from flask_cors import CORS
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)



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

@app.route('/login')
def login():
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = file.filename
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    #run_script()