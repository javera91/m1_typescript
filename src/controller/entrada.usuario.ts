
import { Planeta } from "../model/planeta";

function entradaUsuario(planetas: Planeta[]): Planeta {
    const readlineSync = require('readline-sync');
    console.log("Listado de planetas:");
    planetas.forEach((planeta, index) => {
      console.log(`${index + 1}. ${planeta.nombre}`);
    });

    const seleccion = readlineSync.questionInt('Seleccione el indice del planeta que desea ir:');
    if (seleccion < 1 || seleccion > planetas.length) {
      console.log('¡Error! Selección de planeta inválida.');
      process.exit(1); 
    }
    return planetas[seleccion - 1];
  }
  
  export { entradaUsuario };