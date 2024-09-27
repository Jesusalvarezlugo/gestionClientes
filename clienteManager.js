let Clientes=[];

export function crearCliente(cliente){
    Clientes.push(cliente);

    return "cliente creado exitosamente";
}

export function actualizaCliente(cliente){
    Clientes.indexOf(cliente.DNI);
    cliente[indice]=cliente;
}

export function eliminarCliente(dni){
    indice=clientes.indexOf(dni);
    clientes.splice(indice);
}

export function leerCliente(dni){
    return clientes.find(cliente => cliente.DNI=dni);
}

export function todosClientes(){
    return clientes;
}