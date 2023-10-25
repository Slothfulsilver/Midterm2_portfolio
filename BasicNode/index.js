console.log("Hello World!");

const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, fd)=>{
	if(err) {
		console.log("There was an error");
	} else {
		console.log("This file says: \n" + fd);
	}
});

const sh = require("superheroes");
const sv = require("supervillains");
const sw = require("star-wars-quotes");

console.log("Random starwars quote: " + sw());
//console.log(sh());
console.log("Super hero: " + sh.random() + " vs. Supervillain: " + sv.random());


