/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F de Sande
 * @since Mar 14, 2023
 * @description Programa que saluda en diferentes idiomas
 */

/** @description Servicio de Saludo en diferentes idiomas */
class ServicioSaludo {
  constructor(private idioma: string) { }

  /** 
   * @description Devuelve un saludo en el idioma configurado 
   * @return La cadena del correspondiente saludo
   */
  saludar(): string {
    switch (this.idioma) {
      case 'en': { return 'Hello'; }
      case 'es': { return 'Hola'; }
      case 'fr': { return 'Bonjour'; }
      default: return '';
    }
  }
}

export function main(): void { 
  const saludoES: ServicioSaludo = new ServicioSaludo('es');
  console.log(saludoES.saludar());
}

main();
