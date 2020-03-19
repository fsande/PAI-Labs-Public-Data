
PAI Programming Guide

* `use strict` es obligatorio en todos los programas.
* Cumplir con lo especificado en la [Guía de estilo](https://google.github.io/styleguide/jsguide.html) 
de Google es obligatorio en todos los programas.
* En particular, respecto a los nombres de fichero, en [la guía](https://google.github.io/styleguide/jsguide.html#file-name) 
se indica que han de escribirse en minúsculas usando si es preciso guión o guión bajo y ningún otro caracter de puntuación.
* El uso de JSDoc es obligatorio en todos los programas. 
  Particularmente, cada función y/o método debería tener @desc @param y opcionalmente @returns
* Cada función ha de tener una única finalidad y su nombre debe reflejar claramente la misma. 
  El siguiente código es incorrecto porque la función realiza dos tareas diferentes. 
```
function gameIdPlayerProperties(){
  console.log(`ID del partido: ${baskteballData.id}`);
  console.log(Object.keys(baskteballData.players[0]));  
}
```
* Todo el código ha de estar encapsulado en funciones. 
Toda sentencia de código (salvo declaraciones) ha de pertencer al código de alguna función o método.
A pesar de que Javascript lo permita, un código como el siguiente no es aceptable
```
const THREE_POINTER_SCORE = 3;

let scores = {}; 
for (let player of GAME_DATA.players) {
  let playerScore = 0;
  playerScore += FREE_THROW_SCORE * player.freeThrowsMade;
  playerScore += FIELD_SCORE * (player.fieldGoalsMade - player.threePointersMade);
  playerScore += THREE_POINTER_SCORE * player.threePointersMade;
  if (typeof scores[player.teamName] == 'undefined') {
    scores[player.teamName] = 0;
  }
  scores[player.teamName] += playerScore;
}
for (let team in scores) {
  console.log(`${team}: ${scores[team]}`);
}
```
puesto que no está inserto en función alguna.
Esto debiera programarse de forma análoga a:
```
function computeStatistics() {
  printGame();
  printPlayers();
  printScore();
  mostRebounds();
  bestGuard();
  playersWithAssists();
  freeThrows();
  turnoversToAssists();
}

computeStatistics();
```
* El uso explícito de constantes en el código es inadecuado.
Considere el siguiente fragmento de código:
```
if (element.teamName === 'Pacers') {
  puntosPacers += puntosJugador;
}   
if (element.teamName === 'Hawks') {
  puntosHawks += puntosJugador;
}   

```
Sería preferible escribirlo como:
```
if (element.teamName === PACERS) {
  puntosPacers += puntosJugador;
}   
if (element.teamName === HAWKS) {
  puntosHawks += puntosJugador;
}   
```
particularmente si ese par de constantes se usa con frecuencia en el código.
Esta regla se aplica a todo tipo de constantes, salvo 0 y 1.




