
enum EventType {
    Asteroide,
    Aliens,
    AgujeroNegro,
    Otro,
  }
  
  class Evento {
    constructor(public tipo: EventType, public peligroso: number) {}
  
    trigger(): void {
      console.log(`Evento: ${EventType[this.tipo]}, Nivel de peligro: ${this.peligroso}`);
      // Simulación de efectos.
    }
  }
  
  export { Evento, EventType };
  