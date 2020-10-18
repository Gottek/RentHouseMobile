import axios from 'axios';

/*
 * Change a chaque démarrage de Serveur... 
 * la commande cmd est : ngrok.exe http 5000 
 * Neccesaire pour transiter les requétes API vers l'appareil mobile physique
*/

const URL_API = "http://2ed7d6142339.ngrok.io";

export const getAllProperties = async () => {
    let data;
    await axios.get(URL_API+"/api/property")
    .then(res => data =  res.data)
    .catch(err => console.log(err));

    return data;
}

export const handleOnSubmit = async (newHome) => {
    await axios.post(URL_API+"/api/property/" , newHome)
        .then(()=>console.log("Home insérée ! "))
        .catch(err => console.log(err))
}