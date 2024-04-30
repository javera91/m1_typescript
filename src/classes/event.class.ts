
enum EventType {
    AsteroidImpact,
    AlienEncounter,
    SolarFlare,
    Unknown,
  }
  
  class Event {
    constructor(public type: EventType, public severity: number) {}
  
    trigger(): void {
      console.log(`Event: ${EventType[this.type]}, Severity: ${this.severity}`);
      // Simulación: efectos del acontenimiento.
    }
  }
  
  export { Event, EventType };
  