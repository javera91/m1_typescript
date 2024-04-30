
type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';

function navegar(direccion: Direccion): void {
  console.log(`Navegando al ${direccion}..`);
}

export { navegar };
