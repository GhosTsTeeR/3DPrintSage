import axios from "axios";

export async function chatBotResponse(question ) {
    try {
        const response = await axios({
            url: "https://api3dprintsage.onrender.com/api",
            method: 'POST',
            data: {question},
            headers: {
                'Content-Type': 'application/json'
            }

        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}
export async function getDataUser(uid) {
    try {
        const response = await axios.get(`https://api3dprintsage.onrender.com/data-user/${uid}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function ModifyDataUser(uderData, uid) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/modify-data-user/${uid}`,
            method: 'POST',
            data: uderData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function addCurseToBD(name, data, uid) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/add-curse-to-bd/${uid}`,
            method: 'POST',
            data: {name, data, uid},
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function getDataCurses(id) {
    try {
        const response = await axios.get(`https://api3dprintsage.onrender.com/data-curse/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }



}
export async function getDataCursesAll() {
    try {
        const response = await axios.get(`https://api3dprintsage.onrender.com/data-curse-all`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function getDataCursesUser(id, idUser) {
    try {
        const response = await axios.get(`https://api3dprintsage.onrender.com/data-curse-user/${id}?userId=${idUser}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function addDataCurseUser(id, uid, name) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/add-data-curse-user/${uid}`,
            method: 'POST',
            data: {id, name},
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
export async function modifyDataCurseUser(id, uid, position, estado) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/modify-data-curse-user/${uid}`,
            method: 'POST',
            data: {id, position, estado},
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function getCurseInfoUser(uid) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/get-curse-info-user/${uid}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function addFinalizateCurseUser(id, uid, stateCurse) {
    try {
        const response = await axios({
            url: `https://api3dprintsage.onrender.com/add-finalizate-curse-user/${uid}`,
            method: 'POST',
            data: {id, stateCurse},
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}