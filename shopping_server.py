from flask import flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/getlist', methods=['GET'])
def getList():
        lst = request,json.get('list')
        return jsonify(localStorage.getItem(lst))

@app.route('/savelist', methods=['GET', 'POST'])
def saveList():
        lst = request.json.get('list')
        items = request.json.get('newItems')
        localStorage.setItem(lst, items)

if __name__ == '__main__':
	app.run()
