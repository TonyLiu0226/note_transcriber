from flask import Flask
import os.path
from flask_cors import CORS

app = Flask(__name__)
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
    pass

if __name__ == "__main__":
    app.run(debug=True)
    #run_script()