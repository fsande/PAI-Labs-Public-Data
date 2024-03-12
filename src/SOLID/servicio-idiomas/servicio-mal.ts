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

/** @description Servicio desarollado en diferentes idiomas */
class ServicioIdiomas {
  constructor(private idioma: string) { }

  /** 
   * @description Devuelve un mensaje de bienvenida en el idioma configurado 
   * @return La cadena del correspondiente saludo
   */
  iniciar(): string {
    switch (this.idioma) {
      case 'en': { return 'Hello! Service in English'; }
      case 'es': { return 'Hola! Servicio en español'; }
      case 'fr': { return 'Bonjour ! service en français'; }
      default: return '';
    }
  }
}

export function main(): void { 
  const servicioES: ServicioIdiomas = new ServicioIdiomas('es');
  console.log(servicioES.iniciar());
}

main();
