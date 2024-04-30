
import { Evento, EventType } from "../model/evento";

function simularViaje(tiempo: number, distancia: number, eventos: Evento[]): void {
  console.log(`Simulando viaje por ${tiempo} unidades de tiempo y ${distancia} unidades de distancia...`);

  eventos.forEach(evento => {
    switch (evento.tipo) {
      case EventType.Asteroide:
        console.log(`¡Impacto de asteroide detectado! Daño grave: ${evento.peligroso}`);
        break;
      case EventType.Aliens:
        console.log(`¡Encuentro de alien! Nivel de peligro: ${evento.peligroso}`);
        break;
      case EventType.AgujeroNegro:
        console.log(`¡Agujero negro cerca! Nivel de peligro: ${evento.peligroso}`);
        break;
      default:
        console.log(`Tipo de evento desconocido`);
    }
  });
}

export { simularViaje };