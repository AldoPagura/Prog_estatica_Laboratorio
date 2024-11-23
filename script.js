
function cap_event(campo){
    
        let valor = document.getElementById(campo).value;
        
   if(campo== 'Nombre'){
        document.getElementById('nombre_tabla').innerHTML = valor;
    }else if(campo== 'Apellido'){
        document.getElementById('apellido_tabla').textContent = valor;
    }else if(campo== 'email'){
        document.getElementById('email_tabla').textContent = valor;
    }else if(campo== 'Telefono'){
        document.getElementById('telefono_tabla').textContent = valor;
    }else if(campo== 'Edad'){
        document.getElementById('edad_tabla').textContent = valor;
    }else if(campo== 'Direccion'){
        document.getElementById('direccion_tabla').textContent = valor;
    }else if(campo== 'Provincia'){
        document.getElementById('provincia_tabla').textContent = valor;
    }else if(campo== 'Codigo'){
        document.getElementById('codigo_tabla').textContent = valor;
    }
    
    valor = '';
};
function radio_tabla(){
    const opcionesSeleccionadas = [];
    
    if (document.getElementById('correo_electronico').checked) {
        opcionesSeleccionadas.push('Correo Electronico');
    }
    if (document.getElementById('correo_postal').checked) {
        opcionesSeleccionadas.push('Correo_postal');
    }
    if (document.getElementById('telefono').checked) {
        opcionesSeleccionadas.push('Telefono');
    }
    
    if (opcionesSeleccionadas.length > 0) {
        document.getElementById('contacto_tabla').textContent = opcionesSeleccionadas.join();
    } 
}


function check_tabla(){
        const opcionesSeleccionadas = [];

        if (document.getElementById('noticias').checked) {
            opcionesSeleccionadas.push('Noticias');
        }
        if (document.getElementById('promociones').checked) {
            opcionesSeleccionadas.push('Promociones');
        }
        if (document.getElementById('alertas').checked) {
            opcionesSeleccionadas.push('Alertas');
        }
        if (document.getElementById('eventos').checked) {
            opcionesSeleccionadas.push('Eventos');
        }   
        // Si hay opciones seleccionadas, mostrar en la tabla; si no, poner "Ninguna"
        if (opcionesSeleccionadas.length > 0) {
            document.getElementById('Suscripcion_tabla').textContent = opcionesSeleccionadas.join(', ');
        } else {
            document.getElementById('Suscripcion_tabla').textContent = 'Ninguna';
        }
};


function LeerMas(){
    
    let LeerMas_btn = document.getElementById('LeerMas_btn');
    let LeerMas_CV = document.getElementById('LeerMas_CV');

    if (LeerMas_CV.style.display === 'none') {
        LeerMas_CV.style.display = 'inline';
        LeerMas_btn.textContent = 'LEER MENOS';
    } else {
        LeerMas_CV.style.display = 'none';
        LeerMas_btn.textContent = 'LEER MAS';
    }
};

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function verificarNumero() {
    const numeroUsuario = parseInt(document.getElementById('adivinar').value);
    intentos++;

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        document.getElementById('resultado').textContent = 'Por favor, introduce un número entre 1 y 100.';
    } else if (numeroUsuario === numeroSecreto) {
        document.getElementById('resultado').textContent = `¡Felicidades! Adivinaste el número es: ${numeroSecreto}, lo hiciste en ${intentos} intentos.`;
    } else if (numeroUsuario < numeroSecreto) {
         document.getElementById('resultado').textContent = 'El número es un poco más alto.';
    } else {
        document.getElementById('resultado').textContent = 'El número es un poco más bajo.';
    }
};

