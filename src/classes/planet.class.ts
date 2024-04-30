
enum ResourceType {
    Water,
    Oxygen,
    Minerals,
    Unknown,
  }
  
  class Planet {
    constructor(public name: string, public resourceType: ResourceType, public dangerLevel: number) {}
  
    explore(): void {
      console.log(`Exploring ${this.name}...`);
      // Simulación: exploración lógica.
    }
  }
  
  export { Planet, ResourceType };
  