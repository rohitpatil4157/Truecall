from flask import Flask, render_template, request, jsonify
from truecallerpy import search_phonenumber

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('Index.html')


@app.route('/', methods=['GET', 'POST'])
def get_info():
    if request.method == "POST":
        input_Num = request.form['input_val']
        info = truecall(input_Num)
        return jsonify(info)


def truecall(user_number):
    installation_id = "a1i0j--d3ZiZPkZVY2BC5Jutz-e2ePq4CEVsOW2MYivkB0MzTz-PY5kjw6eQpLys"
    a = search_phonenumber(user_number, "IN", installation_id)
    return a


if __name__ == "__main__":
    app.run(debug=True)
