from flask import Flask, render_template, jsonify, request, json
from flask_cors import CORS
import processor
import consulta
from bd import data_user, modify_data_user

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'enter-a-very-secretive-key-3479373'


@app.route('/', methods=["GET", "POST"])
def index():
    return render_template('index.html', **locals())

@app.route('/chatbot', methods=["GET", "POST"])
def chatbotResponse():
    if request.method == 'POST':
        the_question = request.form['question']
        response = processor.chatbot_response(the_question)
    return jsonify({"response": response })


@app.before_request
def before_request():
    if request.method == 'POST' and request.path == '/api':
        if request.headers.get('Content-Type') != 'application/json':
            return jsonify({'error': 'Unsupported Media Type'}), 415

@app.route('/api', methods=["POST"])
def chatbotResponseApi():
    if request.method == 'POST':
        the_question = request.json['question']
        response = processor.chatbot_response(the_question)
        if response is None:
            respuesta = consulta.consultar_en_linea(the_question)
            print(respuesta)
            #__init__.guardar_consulta(the_question, respuesta)
            return jsonify({"response": "lo lamento, no cuento con esta respuesta. Ten en cuenta que muy pronto ya contare con ella :)"})
        return jsonify({"response": response})
@app.route('/data-user/<uid>', methods=["GET"])
def get_response_data_user(uid):
        
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400

    status, data = data_user(uid)

    if status == 200:
        return jsonify({"message": "Inicio de sesión exitoso", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/modify-data-user/<uid>', methods=["POST"])
def modify_response_data_user(uid):
    data = request.get_json()
    json_data = json.loads(json.dumps(data))

    name = json_data.get("name")
    print(name)
    lastName = json_data.get("lastName")
    cellPhone = json_data.get("cellPhone")
    email = json_data.get("email")
    document = json_data.get("document")
    userName = json_data.get("userName")
    position = json_data.get("position")
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400

    status, data = modify_data_user( uid, name, lastName, cellPhone, email, document, userName, position)

    if status == 200:
        return jsonify({"message": "Se almaceno correctamente", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
        

if __name__ == "__main__":
    app.run(port=5000, debug=True)
