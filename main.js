import{crearCliente} from "./clienteManager.js";

let clientesArray = [];

function nuevoCliente(){
    //para que no recargue la pagina
    event.preventDefault();

    const cliente = {
        nombre:document.querySelector('#nombre').value,
        DNI:document.querySelector('#DNI').value,
        movil:document.querySelector('#movil').value,
        direccion:document.querySelector('#direccion').value
    };

    let mensaje = crearCliente(cliente);
    document.querySelector('#mensaje').innerHTML = mensaje;
    document.forms[0].reset;

    //pedir la lista de usuarios y mostrarla
}


window.nuevoCliente = nuevoCliente;