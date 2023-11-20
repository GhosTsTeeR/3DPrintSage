from flask import Flask, render_template, jsonify, request, json
from flask_cors import CORS
import processor
import consulta
from bd import data_user, modify_data_user, add_data_curse, data_curse, data_all_curses, data_curse_user, add_data_curse_user, modify_data_curse_user, data_curse_info_user, add_finalizate_curse_user

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
@app.route('/add-curse-to-bd/<uid>', methods=["POST"])
def add_curse_to_bd(uid):
    data = request.get_json()
    json_data = json.loads(json.dumps(data))
    name = json_data.get("name")
    data = json_data.get("data")
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400
    if name is None:
        return jsonify({"error": "El nombre del curso es un dato requerido"}), 400
    status, data = add_data_curse(uid, name, data)
    if status == 200:
        return jsonify({"message": "Se almaceno correctamente", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/data-curse/<id>', methods=["GET"])
def get_response_data_curse(id):
    if id is None:
        return jsonify({"error": "id del curso es un dato requerido"}), 400

    status, data = data_curse(id)

    if status == 200:
        return jsonify({"message": "curso encontrado con exito", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/data-curse-all/', methods=["GET"])
def get_response_data_curse_all():

    status, data = data_all_curses()

    if status == 200:
        return jsonify({"message": "cursos encontrados con exito", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/data-curse-user/<id>', methods=["GET"])
def get_response_data_curse_user(id):
    user_id = request.args.get('userId')
    
    if id is None:
        return jsonify({"error": "id del curso es un dato requerido"}), 400
    if user_id is None:
        return jsonify({"error": "id del curso es un dato requerido"}), 400

    status, data = data_curse_user(id, user_id)

    if status == 200:
        return jsonify({"message": "curso encontrado con exito", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/add-data-curse-user/<uid>', methods=["POST"])
def add_response_data_user(uid):
    data_json = request.json
    id = data_json.get('id')
    name_curse = data_json.get('name')
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400

    status, data = add_data_curse_user(id, uid, name_curse)

    if status == 200:
        return jsonify({"message": "Se almaceno correctamente", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/modify-data-curse-user/<uid>', methods=["POST"])
def modify_response_data_curse_user(uid):
    data_json = request.json
    id = data_json.get('id')
    position = data_json.get('position')
    estado = data_json.get('estado')
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400

    status, data = modify_data_curse_user(id, uid, position, estado)

    if status == 200:
        return jsonify({"message": "Se almaceno correctamente", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/get-curse-info-user/<uid>', methods=["GET"])
def get_cuerse_info_user(uid):
    
    if uid is None:
        return jsonify({"error": "id del curso es un dato requerido"}), 400

    status, data = data_curse_info_user(uid)

    if status == 200:
        return jsonify({"message": "curso encontrado con exito", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500
@app.route('/add-finalizate-curse-user/<uid>', methods=["POST"])
def add_response_finalizate_curse_user(uid):
    data_json = request.json
    id = data_json.get('id')
    estate_curse = data_json.get('stateCurse')
    if uid is None:
        return jsonify({"error": "Uid es un dato requerido"}), 400

    status, data = add_finalizate_curse_user(id, uid, estate_curse)

    if status == 200:
        return jsonify({"message": "Se almaceno correctamente", "data": data})
    elif status == 401:
        return jsonify({"error": "Credenciales inválidas"}), 401
    else:
        return jsonify({"error": "Error en el servidor"}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
