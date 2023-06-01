const {app, BrowserWindow} = require('electron')
const sharp = require('sharp');

let ventanaPrincipal;

sharp('vue.png')
    .resize(400)
    .toFile('vueresized.png');

app.on('ready',crearVentana);

function crearVentana(){
    ventanaPrincipal = new BrowserWindow({
        width:800,
        height:600
    });

    ventanaPrincipal.loadFile('./index.html')
}

crearVentana()