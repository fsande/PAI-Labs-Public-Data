
PAI Programming Guide

* `use strict` es obligatorio en todos los programas
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




