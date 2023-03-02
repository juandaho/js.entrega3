/* Este simulador tiene como finalidad generar un Array de objetos de Pacientes, donde usando funciones de orden superior se realizaran, calculos y busquedas de los pacientes.

Nota: La pagina web se uso usando boostrat de una plantilla (https://startbootstrap.com/theme/freelancer)

 */

//Saludo inicial al usuario

alert(
  "Bienvenido a nuestro SIMULADOR DE PACIENTES. Nota: La información del desarrollo de este ejercicio se encuentra en la consola"
);

//Clase Paciente

class Paciente {
  constructor(nombre, edad, horas, sicologo) {
    this.nombre = nombre;
    this.edad = edad;
    this.horasConsulta = horas;
    this.sicologo = sicologo;
  }
}

//Clase Sicologo

class Sicologo {
  constructor(nombre, tarifa) {
    this.nombre = nombre;
    this.tarifa = tarifa;
  }
}

//Instancia de dos sicologos con su información respectiva

const sicologo1 = new Sicologo("Diana Perez", 100000);
const sicologo2 = new Sicologo("Gloria Tamayo", 90000);

//Función calcular el costo
function valorConsulta(costo_sicologo, horas_paciente) {
  return costo_sicologo * horas_paciente;
}

// variable de pacientes
const pacientes = [];
let nombrePaciente;
let edadPaciente;
let horasConsulta;
let numeroPacientes;
let sicologoEscogido;

//Saludo inicial
numeroPaciente = Number(
  prompt("Ingrese el número de pacientes que desea crear en el sistema")
);

//Ciclo para que la instancia de Pacientes se llene por medie de un array
for (let i = 1; i <= numeroPaciente; i++) {
  nombrePaciente = prompt("Ingrese el nombre del paciente: #" + i);
  horasPaciente = Number(
    (edadPaciente = prompt("Ingrese la edad del paciente: " + nombrePaciente))
  );
  horasPaciente = Number(
    prompt("Ingrese las horas que el paciente consultar: " + nombrePaciente)
  );

  // A través de escoger dos números, se escoge 1. Diana Perez 2. Gloria Tamayo

  sicologoEscogido = Number(
    prompt(
      "Escoja el espcialista que deseee: Coloca el número 1 => Diana Perez o número 2 => Gloria Tamayo"
    )
  );

  pacientes.push(
    new Paciente(nombrePaciente, edadPaciente, horasPaciente, sicologoEscogido)
  );
}

// Función Fecha para colocar la información de la fecha.
const hoy = new Date();
console.log(
  "La fecha de hoy para presentar nuestra información es: " + hoy.toDateString()
);

console.log(
  "A continuación presentamos el valor total de las consulta por cada paciente"
);

let tarifaSicologo1 = sicologo1.tarifa;
let tarifaSicologo2 = sicologo2.tarifa;

// For Each que calcula el valor de pacientes por horas consulta.

pacientes.forEach((paciente) => {
  if (paciente.sicologo === 1) {
    console.log(
      "El paciente con nombre: " +
        paciente.nombre +
        " Escogio la sicologo Diana Perez y el costo total de las citas es: " +
        valorConsulta(sicologo1.tarifa, paciente.horasConsulta)
    );
  } else if (paciente.sicologo === 2) {
    console.log(
      "El paciente con nombre: " +
        paciente.nombre +
        " Escogio la sicologo Gloria Tamayo y el costo total de las citas es: " +
        valorConsulta(sicologo2.tarifa, paciente.horasConsulta)
    );
  }
});

console.log(
  "A continuación mostramos los pacientes ordenados por orden alfabetico)"
);

// Ordena los pacientes en orden alfabetico

pacientes.sort((o1, o2) => {
  if (o1.nombre < o2.nombre) {
    return -1;
  } else if (o1.nombre > o2.nombre) {
    return 1;
  } else {
    return 0;
  }
});

pacientes.forEach((paciente) => {
  console.log(paciente.nombre);
});

// Buscar paciente para ver la sicologa que escogio:

let terminoBuscar = prompt("Ingrese el nombre  paciente a buscar");

const pacienteEncontrado = pacientes.some(
  (paciente) => paciente.nombre === terminoBuscar
);

const pacienteBuscado = pacientes.find(
  (paciente) => paciente.nombre === terminoBuscar
);

if (pacienteEncontrado === true) {
  console.log("El paciente SI fue encontrado: " + pacienteBuscado.nombre);
} else {
  console.log("El paciente NO fue encontrado ");
}
