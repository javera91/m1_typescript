// src/utils/event.handler.ts

import { Event } from "../classes/event.class";

function handleEvent(event: Event): void {
  console.log(`Handling event: ${event.type}`);
  // Implementar lógica para manejar el evento aquí
}

export { handleEvent };
