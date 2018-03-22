from flask import flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/getlist', methods=['GET'])
def getList():
        lst = open('list.txt', 'r')
	return jsonify(file.readlines())

@app.route('/savelist', methods=['GET', 'POST'])
def saveList():
        lst = open('list.txt', 'w')
	lst_2 = request.json.get('list')
	lst.write(lst_2)
	lst.close()
        
if __name__ == '__main__':
	app.run()
