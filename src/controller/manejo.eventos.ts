
import { Evento, EventType } from "../model/evento";

// Manejo de eventos
function manejoEvento(evento: Evento): void {
  switch (evento.tipo) {
    case EventType.Asteroide:
      console.log(`Impacto de asteroide detectado! Daño`);
      break;
    case EventType.Aliens:
      console.log(`¡Encuentro de alien!`);
      break;
    case EventType.AgujeroNegro:
      console.log(`¡Agujero negro cerca! Duración.`);
      break;
    default:
      console.log(`Tipo de evento desconocido`);
  }
}

export { manejoEvento };
