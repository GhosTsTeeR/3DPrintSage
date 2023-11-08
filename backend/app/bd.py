from flask import Flask
from firebase_admin import credentials, initialize_app, firestore

# inicializar la aplicación de firebase admin
cred = credentials.Certificate('static/firebase_config.json')
initialize_app(cred)

# Obtener una referencia a la base de datos Firestore
db = firestore.client()

""" data = {
    "intents": [
  
      {
        "tag": "thanks",
        "patterns": ["Gracias", "Gracias por la ayuda", "Eso es útil", "¡Muchas gracias!"],
        "responses": ["¡Feliz de poder ayudar!", "¡Siempre a tu servicio!", "Fue un placer ayudarte"]
      },
    ]
  
  }
db.collection("chat_IASP").document().set(data) 
 """

    
def obtener_datos_preguntas():
    # Nombre de la colección que deseas consultar
    coleccion = 'chat_IASP'

    # Consulta todos los documentos en la colección y almacénalos en una lista
    documentos = db.collection(coleccion).stream()

    # Inicializa una lista para almacenar los datos en el formato deseado
    resultados = []

    # Recorre los documentos y formatea los datos en el formato deseado
    for documento in documentos:
        datos_documento = documento.to_dict()
        resultados.append(datos_documento)

    # Crea un diccionario con la estructura final

    return resultados

def data_user(uid):
    try:
        # Nombre de la colección que contiene los datos de usuario (puedes cambiarlo según tu estructura)
        coleccion = 'users'

        # Consulta el documento con la UID proporcionada en la colección
        usuario_ref = db.collection(coleccion).document(uid)
        usuario = usuario_ref.get()

        if usuario.exists:
            # Si el documento existe, obtén los datos del usuario
            datos_usuario = usuario.to_dict()
            return 200, datos_usuario
        else:
            # Si el documento no existe, retorna un código de respuesta 404 o 401, dependiendo de tus necesidades
            return 404, None

    except Exception as e:
        print(f"Error al obtener datos de usuario en Firebase: {e}")
        return 500, None
def modify_data_user(uid, name, lastName, cellPhone, email, document, userName, position):
    try:
        coleccion = 'users'
        usuario_ref = db.collection(coleccion).document(uid)
        usuario_ref.set({
            'id': uid,
            'name': name,
            'cellPhone': cellPhone,
            'email': email,
            'document': document,
            'lastName': lastName,
            'position': position,
            'psswd': "",
            'roll': "usuario",
            'userName': userName,
        })
        return 200, email

    except Exception as e:
        print(f"Error al almacenar datos de usuario en Firebase: {e}")
<<<<<<< HEAD
        return 500, e
=======
        return 500, e
>>>>>>> cc63330bef68b9a52ea79060aa778ee731ee52d4
