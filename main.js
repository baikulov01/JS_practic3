let films = JSON.parse(localStorage.getItem("films"));
if (!films) films = [];
let addToArrButton = document.getElementById("film_add");
addToArrButton.addEventListener("click", addToArr);

let hideBlock = document.getElementById("pop-up_block");
document.getElementById("hide_block_button").addEventListener("click", () => {
	document.getElementById("block").hidden=true;
	hideBlock.hidden=true;
	document.getElementById("main").style.opacity=1;
});


function addToArr(){ 
	let title = document.getElementById("film_title").value;
	let director = document.getElementById("film_director").value;
	let country = document.getElementById("film_country").value;
	let genre = document.getElementById("film_genre").value;
	let script = document.getElementById("film_script").value;
	let producer = document.getElementById("film_producer").value;
	let operator = document.getElementById("film_operator").value;
	let composer = document.getElementById("film_composer").value;
	let budget = document.getElementById("film_budget").value;
	let worldFees = document.getElementById("film_worldFees").value;
	let age = document.getElementById("film_age").value;
	let duration = document.getElementById("film_duration").value;
	let date = document.getElementById("film_date").value;
	let fileinput = document.getElementById("film_img");

	
	let reader = new FileReader();
    reader.readAsDataURL(fileinput.files[0]);
    reader.onload =  () => {
		let img = reader.result;
		let film = new Film(title,
							director,
							country,
							genre,
							script,
							producer,
							operator,
							composer,
							budget,
							worldFees,
							age,
							duration,
							date,
							img
							);
		films.push(film);
		// films.forEach(function(item,i,films){
		// 	console.log(item);
		// })
		
		localStorage.setItem("films", JSON.stringify(films));
		document.getElementById("block").hidden=false;
		document.getElementById("pop-up_block").hidden=false;	
		document.getElementById("main").style.opacity=0.3;
	}
}

class Film {
	title;
	director;
	country;
	genre;
	script;
	producer;
	operator;
	composer;
	budget;
	worldFees;
	age;
	duration;
	date;
	image;
	feeds = [];
	constructor(title,
				director,
				country,
				genre,
				script,
				producer,
				operator,
				composer,
				budget,
				worldFees,
				age,
				duration,
				date,
				image)
	{
		this.title=title;
		this.director=director;
		this.country=country;
		this.genre=genre;
		this.script=script;
		this.producer=producer;
		this.operator=operator;
		this.composer=composer;
		this.budget=budget;
		this.worldFees=worldFees;
		this.age=age;
		this.duration=duration;
		this.date=date;
		this.image=image;
	}

}
