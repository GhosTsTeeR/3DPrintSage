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
        return 500, e

def add_data_curse(id, name, data):
    try:
        coleccion = 'curses'
        coleccion_ref = db.collection(coleccion)

        nuevo_documento_ref = coleccion_ref.document()

        nuevo_documento_id = nuevo_documento_ref.id
        
        nuevo_documento_ref.set({
            'id': nuevo_documento_id,
            'idUsuario': id,
            'name': name,
            'data': data
        })

        return 200, nuevo_documento_id

    except Exception as e:
        print(f"Error al almacenar datos del curso en Firebase: {e}")
        return 500, e
def data_all_curses():
    try:
        coleccion = 'curses'

        # Consulta la colección completa de cursos
        usuario_ref = db.collection(coleccion)
        curses = usuario_ref.stream()

        # Inicializa una lista para almacenar los datos de los cursos
        data_curses = []

        for curse in curses:
            # Convierte cada curso a un diccionario y agrega a la lista
            data_curses.append(curse.to_dict())

        return 200, data_curses

    except Exception as e:
        print(f"Error al obtener datos de los cursos en Firebase: {e}")
        return 500, None
def data_curse(id):
    try:
        coleccion = 'curses'

        # Consulta el documento con la UID proporcionada en la colección
        curse_ref = db.collection(coleccion).document(id)
        curse = curse_ref.get()

        if curse.exists:
            datos_usuario = curse.to_dict()
            return 200, datos_usuario
        else:
            # Si el documento no existe, retorna un código de respuesta 404 o 401, dependiendo de tus necesidades
            return 404, None

    except Exception as e:
        print(f"Error al obtener datos de usuario en Firebase: {e}")
        return 500, None
def data_curse_user(id, user_id):
    try:
        coleccion = 'my_curses'

        query = db.collection(coleccion).where('idCurse', '==', id).where('idUser', '==', user_id)
        resultados = query.stream()


        documentos_encontrados = []

        # Itera sobre los resultados y almacena la información relevante
        for resultado in resultados:
            datos_documento = resultado.to_dict()
            nombre_documento = resultado.id
            documentos_encontrados.append({'nombre_documento': nombre_documento, 'datos': datos_documento})

        return 200, documentos_encontrados

    except Exception as e:
        print(f"Error al consultar documentos: {e}")
        return 500, e
def add_data_curse_user(id, uid, name_curse):
    try:
        coleccion = 'my_curses'
        coleccion_ref = db.collection(coleccion)

        nuevo_documento_ref = coleccion_ref.document()

        nuevo_documento_id = nuevo_documento_ref.id
        
        nuevo_documento_ref.set({
            'id': nuevo_documento_id,
            'idCurse': id,
            'idUser': uid,
            'nameCurse': name_curse,
            'estateCurse': False,
        })

        return 200, nuevo_documento_id

    except Exception as e:
        print(f"Error al almacenar datos del curso en Firebase: {e}")
        return 500, e

def modify_data_curse_user(id, uid, position, estado):
    try:
        coleccion = 'my_curses'
        coleccion_ref = db.collection(coleccion)

        # Consulta el documento existente en la colección
        query = coleccion_ref.where('idCurse', '==', id).where('idUser', '==', uid)
        resultados = query.stream()

        documentos_encontrados = list(resultados)

        if len(documentos_encontrados) == 1:
            # Si se encuentra exactamente un documento, actualiza la información

            # Recupera el documento existente
            documento_existente = documentos_encontrados[0]

            # Recupera la información actual del documento
            datos_documento = documento_existente.to_dict()

            # Verifica si la posición ya existe en los datos del documento
            if 'positions' in datos_documento:
                # Si la posición ya existe, actualiza el estado
                posicion_existente = next(
                    (posicion for posicion in datos_documento['positions'] if posicion['position'] == position),
                    None
                )

                if posicion_existente:
                    # Si la posición ya existe, actualiza el estado
                    posicion_existente['estado'] = estado
                else:
                    # Si la posición no existe, agrégala
                    datos_documento['positions'].append({'position': position, 'estado': estado})
            else:
                # Si no hay posiciones en el documento, crea la lista
                datos_documento['positions'] = [{'position': position, 'estado': estado}]

            # Actualiza el documento con la nueva información
            documento_existente.reference.set(datos_documento)

            return 200, documento_existente.id
        else:
            # Si no se encuentra exactamente un documento, puedes manejarlo según tus necesidades
            return 404, None

    except Exception as e:
        print(f"Error al modificar datos del curso en Firebase: {e}")
        return 500, e

def data_curse_info_user(uid):
    try:
        coleccion = 'my_curses'

        query = db.collection(coleccion).where('idUser', '==', uid)
        resultados = query.stream()


        documentos_encontrados = []

        # Itera sobre los resultados y almacena la información relevante
        for resultado in resultados:
            datos_documento = resultado.to_dict()
            nombre_documento = resultado.id
            documentos_encontrados.append({'nombre_documento': nombre_documento, 'datos': datos_documento})

        return 200, documentos_encontrados

    except Exception as e:
        print(f"Error al consultar documentos: {e}")
        return 500, e

def add_finalizate_curse_user(id, uid, state_curse):
    try:
        coleccion = 'my_curses'
        coleccion_ref = db.collection(coleccion)

        # Consulta el documento existente en la colección
        query = coleccion_ref.where('idCurse', '==', id).where('idUser', '==', uid)
        resultados = query.stream()

        documentos_encontrados = list(resultados)

        if len(documentos_encontrados) == 1:
            # Recupera el documento existente
            documento_existente = documentos_encontrados[0]

            # Actualiza el campo 'estadoCurse' con el nuevo valor
            documento_existente.reference.update({
                'estateCurse': state_curse
            })

            return 200, documento_existente.id
        else:
            # Si no se encuentra exactamente un documento, puedes manejarlo según tus necesidades
            return 404, None

    except Exception as e:
        print(f"Error al modificar datos del curso en Firebase: {e}")
        return 500, e
