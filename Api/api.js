import axios from 'axios';

/*
 * Change a chaque démarrage de Serveur... 
 * la commande cmd est : ngrok.exe http 5000 
 * Neccesaire pour transiter les requétes API vers l'appareil mobile physique
*/
const URL_API = "http://2669b2c2d966.ngrok.io"; 

export const getAllProperties = async () => {
    await axios.get(URL_API+"/api/property")
    .then(res => {
        console.log("FETCH DATA OK ");
        console.log(res.data);
        return res.data;
    })
    .catch(err => {
        console.log(err)
        return err;
    });
}