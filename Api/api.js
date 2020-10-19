import axios from 'axios';

/*
 * Change a chaque démarrage de Serveur... 
 * la commande cmd est : ngrok.exe http 5000 
 * Neccesaire pour transiter les requétes API vers l'appareil mobile physique
*/

const URL_API = "http://1714eacf1a5a.ngrok.io";

export const getAllProperties = async () => {
    let data;
    await axios.get(URL_API+"/api/property")
    .then(res => data = res.data)
    .catch(err => console.log(err));

    return data;
}

export const handleOnSubmit = async (newHome) => {
    await axios.post(URL_API+"/api/property/" , newHome)
        .then(()=>console.log("Maison inséré ! "))
        .catch(err => console.log(err))
}

export const updateHome = async (updatedHome) => {
    await axios.put(URL_API+"/api/property/"+updatedHome.idProperty, updatedHome)
        .then(()=>console.log("Home modifiée"))
        .catch(err => console.log(err))
}

export const deleteHome = async (idHome) => {
    await axios.delete(URL_API+"/api/property/"+idHome)
        .then(()=>console.log("Home supprimée ! "))
        .catch(err => console.log(err))
}

export const getAllClient = async () => {
    let data;
    await axios.get(URL_API+"/api/client")
        .then(res => data = res.data)
        .catch(err => console.log(err));
    return data;
}
