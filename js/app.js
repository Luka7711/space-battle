


// function battle() {

// 	// if(Math.random() < alien.acc){
// 	// 	ourShip.hull = ourShip.hull - fireP;
// 	// 	console.log("ourShip has been hit");
// 	// }

// 	for(let i=ourShip.hull; i>0;i--){

// 	}
// }


// class Ship {

// 	constructor(hull, fireP, acc){
// 		this.hull = hull;
// 		this.fireP = fireP;
// 		this.acc = acc;
// 	}

// 	attack(){

// 	}
// }

// const ourShip = new Ship(20, 5, .7);

// console.log(ourShip);


// class alien extends Ship {
// 	constructor(hull, fireP, acc, amountOfSships){
// 		super(hull, fireP, acc)
// 		this.amountOfShips = this.amountOfShips;
// 	}
// }


// rndmNumGener = Math.random()*





// const alien = {

// 	getData(){
	
// 		this.hull = Math.floor(Math.random()*(6-3) + 3);
// 		this.fireP = Math.floor(Math.random()*(4-2) + 2);
// 		this.acc = Math.random()*(.8-.6)+.6;
// 	}
// }

// alien.getData();

// function battle() {

// }



const ourShip = {
	hull:20,
	fireP: 5,
	accuracy:.7,
	attack(someAlien) {
		console.log('ourShip.attack called')
		console.log(someAlien)
	}

}

class Alien {
	constructor(){
		this.hull = Math.floor(Math.random()*(6-3) + 3);
		this.firePwr = Math.floor(Math.random()*(4-2) + 2);
		this.acc = Math.random()*(.8-.6)+.6;
	}
	attack(theShip) {
		console.log("attack method called for alien")
		console.log(theShip)
	}
}


const a1 = new Alien();
const a2 = new Alien();
const a3 = new Alien();
const a4 = new Alien();
const a5 = new Alien();
const a6 = new Alien();

const aliensArray = [];

// for(let i=0; i<6; i++){
// 	aliensArray.push()
// }
aliensArray.push(a1);
aliensArray.push(a2);
aliensArray.push(a3);
aliensArray.push(a4);
aliensArray.push(a5);
aliensArray.push(a6);



console.log(ourShip);

ourShip.attack(a2)


a2.attack(ourShip)








	





