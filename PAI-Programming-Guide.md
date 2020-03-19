
# PAI Programming Guide

* Aloje todos los programas de su proyecto (práctica) en el directorio `src` o subdirectorios del mismo en caso de que fuera necesario (no lo es en la mayoría de los ejercicios prácticos de PAI).
* Todos los proyectos (ejercicios de prácticas) deben contar con un fichero `package.json` en el que se especifiquen, entre otros parámetros las dependencias del proyecto.
La ejecución `de npm install` para su proyecto debe proceder libre de errores o avisos.
El siguiente sería un ejemplo de ejecución correcta (limpia) de ese comando:
```
$ npm install
added 161 packages from 136 contributors and audited 929 packages in 1.612s

found 0 vulnerabilities
```
* `use strict` es obligatorio en todos los programas.
* Cumplir con lo especificado en la [Guía de estilo](https://google.github.io/styleguide/jsguide.html) 
de Google es obligatorio en todos los programas.
* En particular, respecto a los nombres de fichero, en [la guía](https://google.github.io/styleguide/jsguide.html#file-name) 
se indica que han de escribirse en minúsculas usando si es preciso guión o guión bajo y ningún otro caracter de puntuación.
* El uso de JSDoc es obligatorio en todos los programas. 
  Particularmente, cada función y/o método debería tener @desc @param y opcionalmente @returns
* Cada función ha de tener una única finalidad y su nombre debe reflejar claramente la misma. 
  El siguiente código es incorrecto porque la función realiza dos tareas diferentes. 
```javascript
function gameIdPlayerProperties(){
  console.log(`ID del partido: ${baskteballData.id}`);
  console.log(Object.keys(baskteballData.players[0]));  
}
```
* Todo el código ha de estar encapsulado en funciones. 
Toda sentencia de código (salvo eventualmente declaraciones) ha de pertencer al código de alguna función o método.
A pesar de que Javascript lo permita, un código como el siguiente no es aceptable
```javascript
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
```javascript
function computeGameStatistics() {
  printGame();
  printPlayers();
  printScore();
  mostRebounds();
  bestGuard();
  playersWithAssists();
  freeThrows();
  turnoversToAssists();
}

computeGameStatistics();
```
donde el programa se 'orquesta' en torno a una función principal `computeGameStatistics()` que a su
vez (si resulta necesario) se apoya (modularidad) en otras funciones complementarias.
* El uso explícito de constantes en el código es inadecuado.
Considere el siguiente fragmento de código:
```javascript
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

* Debe minimizarse la utilización de entidades globales. Cada declaración (de variables, constantes, funciones, etc.) debe mantener su ámbito léxico lo más acotado posible.
* Las funciones no deben producir efectos laterales y menos aún de forma inadvertida.
Si una función modifica algún elemento que es global a la misma, ese elemento ha de ser pasado como parámetro a la función para evidenciar esa situación.
* Incluso si la función no modifica, pero lee o utiliza un elemento que le es global, es deseable pasarlo como parámetro para advertir igualmente de esa situación.


