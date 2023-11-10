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