from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
   return "I can successfully copy and paste!"

if __name__ == "__main__":
   app.run()