from flask import Flask
import os.path

app = Flask(__name__)

@app.route('/turnpage')
def run_script():
    file_exists = os.path.isfile('/Volumes/CIRCUITPY/code.py')

    if file_exists:
        file = open(r'/Volumes/CIRCUITPY/code.py', 'a')
        file.write(' ')
        file.close()
    return "Hello, Welcome to GeeksForGeeks"

@app.route('/login')
def login():
    pass

if __name__ == "__main__":
    app.run(debug=True)
    #run_script()