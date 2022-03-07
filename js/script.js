// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
const grid = document.getElementById('grid');
const scoreOutput = document.getElementById('score');
const levelSelectElement = document.getElementById('game-level');


document.querySelector('#play-btn').addEventListener('click', function() {
	grid.innerHTML = '';
	scoreOutput.innerHTML = '';
	generateGame();
})

document.getElementById('reset-btn').addEventListener('click', function() {
	grid.innerHTML = '';
	scoreOutput.innerHTML = '';
	levelSelectElement.value = "Choose a difficulty level";
})




// ! FUNCTIONS below ! //
/**
 * function that creates a div cell as a dom element
 * @param {*} innerContent inner html content of the div cell, wrapped by a span tag
 * @returns a div cell element
 */
function createGridCellElement (innerContent, cellsPerRow) {
	const gridCell = document.createElement('div');
	gridCell.classList.add('cell');
	gridCell.style.width = `calc(100% / ${cellsPerRow}`;
	gridCell.style.height = gridCell.style.width;
	gridCell.innerHTML = `
	<span>${innerContent}</span>`
	return gridCell;
}


/**
 * function that generates a game board
 * @returns a game board based on difficulty level selected
 */
function generateGame(){
	let cellsNumber;
	let cellsPerRow;
	switch(parseInt(levelSelectElement.value)){
		case 1 :
			cellsNumber = 100;
			break;
		case 2 :
			cellsNumber = 81;
			break;
		case 3 :
			cellsNumber = 49;
			break;
		default :
		scoreOutput.innerHTML ='Please select a level, then press play';
	}
	cellsPerRow = Math.sqrt(cellsNumber);
	for ( let i = 1; i <= cellsNumber; i++){
		const currentGridCell = createGridCellElement(i, cellsPerRow);
		currentGridCell.addEventListener('click', function() {
			this.classList.add('clicked');
		})
		grid.appendChild(currentGridCell);
	}
	return grid;
}
