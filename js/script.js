// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const selectLevelElement = document.getElementById('game-level');
const playBtn = document.querySelector('#play-btn');

playBtn.addEventListener('click', function() {
	if ( selectLevelElement.value == 'easy'){
		console.log('easy');
	} else if ( selectLevelElement.value == 'intermediate' ){
		console.log('intermediate');
	} else if ( selectLevelElement.value == 'difficult') {
		console.log('difficult');
	}
})

