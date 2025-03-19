/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F de Sande
 * @since Mar 12, 2024
 * @description Program to manage different kinds of Media Players
 *              The design violates one of the SOLID principles.
 * 
 */

/** @description Represents a Media Player that can play and record audio */
interface Player {
  playAudio(): void;
  recordAudio(): void;
  playVideo(): void;
}

/**
 * @description A Cassette can play and record audio
 * @implements Player
 */
class Cassette implements Player{
  public playAudio() { return 'Playing Audio'; }
  public recordAudio() { return 'Recording Audio'; }
  public playVideo() { return 'Not implemented method.'; }
}

/**
 * @description A TV can play audio
 * @implements Player
 */
class Tv implements Player{
  public playAudio() { return 'Playing Audio'; }
  public recordAudio() { return 'Not implemented method.'; }
  public playVideo() { return 'Playing Video'; }
}


/**
 * @description A VideoGame console can play audio. 
 * @implements Player
 */
class VideoGameConsole implements Player{
  public playAudio() { return 'Playing Audio'; }
  public recordAudio() { return 'Not implemented method.'; }
  public playVideo() { return 'Playing Video'; }
}

export function main(): void { 
  const cassette: Player = new Cassette();
  console.log(cassette.playAudio());
  console.log(cassette.recordAudio());
  console.log(cassette.playVideo());

  const tv: Player = new Tv();
  console.log(tv.playAudio());
  console.log(tv.recordAudio());
  console.log(tv.playVideo());

  const playStation: Player = new VideoGameConsole();
  console.log(playStation.playAudio());
  console.log(playStation.recordAudio());
  console.log(playStation.playVideo());
}

main();
