import requests

def consultar_en_linea(pregunta):
    # Lógica para realizar la consulta en línea utilizando la clave de API de Google Cloud Console
    url = "https://www.googleapis.com/customsearch/v1"  # URL de la API en línea
    params = {
        "q": pregunta,
        "key": "AIzaSyA0hA3VhAOsdONL2eLVk1dpzF9h3iWbvRE"
    }  # Parámetros de la consulta, incluyendo la clave de API

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        respuesta = data["respuesta"]
    else:
        respuesta = "Error en la consulta en línea"

    return respuesta