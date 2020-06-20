from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

@app.route('/task')
def task():
    pass

@app.route(profile/get)
def get_profile():
    return 

if __name__ == '___main__':
    app.run()
