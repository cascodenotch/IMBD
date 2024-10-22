import { Movie } from "./Movie";
import { Professional } from "./Professional";

let director = new Professional ("George Lucas", 30, 50, 1.70, true,"España", 1, "Directora");
let escritor = new Professional ("Juan", 60, 60, 1.85, false,"Colombia", 1, "Escritor");
let actor1 = new Professional ("Harrison Ford", 60, 60, 1.85, false,"Colombia", 1, "Actor");
let actor2= new Professional ("Carrie Fisher", 60, 60, 1.85, false,"Colombia", 1, "Actriz");

let pelicula1 = new Movie ("Star Wars", 1977, "Estados Unidos", "Ciencia ficción");

// Asignar valores adicionales a película

pelicula1.actors = ([actor1,actor2]);
pelicula1.director = director;
pelicula1.writer = escritor;
pelicula1.language = "Inglés";
pelicula1.plataforma = "Disney";
pelicula1.isMCU = true; 
pelicula1.mainCharacterName = "Lucas"; 
pelicula1.producer ="Disney";
pelicula1.distributor = "Fox";

// Mostar datos 

console.log(pelicula1.mostrarDatos());