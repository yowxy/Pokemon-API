const container = document.querySelector('#container');
// url api nya 
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    
// perulanngan lebih dari 500 kali
for (let i = 1; i <= 500; i++) {
	const pokeBall = document.createElement('div');
	pokeBall.classList.add('pokemon');
	// pemanggilan class API 
	const imgPokemon = document.createElement('img');
	imgPokemon.src = `${baseImgURL}${i}.png`;
	// penambahan inner text atau text biasa
	const label = document.createElement('span');
	label.innerText = `#${i}`;

    //  pemnaggian dari kelas pokeball
	pokeBall.appendChild(imgPokemon);
	pokeBall.appendChild(label);
	container.appendChild(pokeBall);
}