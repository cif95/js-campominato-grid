// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const levelSelectElement = document.getElementById('game-level');
const playBtn = document.querySelector('#play-btn');
const grid = document.getElementById('grid');

playBtn.addEventListener('click', function() {
	grid.innerHTML = '';
	if ( levelSelectElement.value === 'easy'){
		for ( let i = 1; i <= 100; i++) {
			const gridBox = createGridBoxElement(i);
			grid.appendChild(gridBox);
		}
	} else if ( levelSelectElement.value === 'intermediate' ){
		for ( let i = 1; i <= 81; i++) {
			const gridBox = createGridBoxElement(i);
			grid.appendChild(gridBox);
		}
	} else if ( levelSelectElement.value === 'difficult') {
		for ( let i = 1; i <= 49; i++) {
			const gridBox = createGridBoxElement(i);
			grid.appendChild(gridBox);
		}
	}
})


/**
 * function that creates a div grid box as a dom element, that becomes blue when clicked and has an inner html content
 * @param {*} innerContent inner html content of grid box
 * @returns a div grid box element
 */
function createGridBoxElement (innerContent) {
	const gridBox = document.createElement('div');
	gridBox.classList.add('cell');
	gridBox.addEventListener('click', function(){
		this.classList.toggle('clicked');
	})
	gridBox.innerHTML = `<span>${innerContent}</span>`
	return gridBox;
}
