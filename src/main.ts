
import { Planeta, TipoDeRecurso } from "./model/planeta";
import { Evento, EventType } from "./model/evento";
import { navegar } from "./controller/exploracion.funcion";
import { ColeccionRecursos } from "./controller/coleccion.recursos.funcion";
import { manejoEvento } from "./controller/manejo.eventos";
import { entradaUsuario } from "./controller/entrada.usuario";
import { simulacionTiempo } from "./controller/simulacion";
import SpaceShip from "./view/spaceship";

// Instancia SpaceShip.
const mySpaceship: SpaceShip = {
  health: 100,
  loadCapacity: 200,
  speed: 10,
};

// Planetas creados.
const tierra = new Planeta("Tierra", TipoDeRecurso.Agua, 2);
const marte = new Planeta("Marte", TipoDeRecurso.Oxigeno, 5);
const luna = new Planeta("Luna", TipoDeRecurso.Minerales, 1);

// Planetas a explorar.
tierra.explore();
marte.explore();
luna.explore();

// Creación eventos.
const asteroide = new Evento(EventType.Asteroide, 8);
const aliens = new Evento(EventType.Aliens, 6);
const agujeroNegro = new Evento(EventType.AgujeroNegro, 3);

// Manejo de eventos.
manejoEvento(asteroide);
manejoEvento(aliens);
manejoEvento(agujeroNegro);

// Navegación de direcciones diferentes.
navegar('Norte');
navegar('Este');
navegar('Sur');
navegar('Oeste');

simulacionTiempo(5);

const planetaSeleccionado = entradaUsuario([tierra, marte, luna]);
console.log(`Ha seleccionado viajar a ${planetaSeleccionado.nombre}`);

const recursoColeccionado = new ColeccionRecursos<string>();

const recursosDisponibles = [
  { recurso: 'Agua', maxVeces: 3 },
  { recurso: 'Oxigeno', maxVeces: 4 },
  { recurso: 'Minerales', maxVeces: 2 }
];

for (const recursoInfo of recursosDisponibles) {
  const cantidadRecoleccion = Math.floor(Math.random() * (recursoInfo.maxVeces + 4)); 
  for (let i = 0; i < cantidadRecoleccion; i++) {
    recursoColeccionado.add(recursoInfo.recurso);
  }
}
console.log("Recursos coleccionados:", recursoColeccionado.getAll());