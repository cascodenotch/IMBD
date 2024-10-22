import { IMDb } from "./IMDb";
import { Movie } from "./Movie";
import { Professional } from "./Professional";
import * as fs from 'fs';

let pelicula1 = new Movie ("Star Wars", 1960, "Estados Unidos", "Ciencia ficción");
let pelicula2 = new Movie ("Dune", 1960, "Estados Unidos", "Ciencia ficción");
let pelicula3 = new Movie ("Parasitos", 1960, "Estados Unidos", "Drama");

let director = new Professional ("George Lucas", 30, 50, 1.70, true,"España", 1, "Directora");
let escritor = new Professional ("Juan", 60, 60, 1.85, false,"Colombia", 1, "Escritor");
let actor1 = new Professional ("Harrison Ford", 60, 60, 1.85, false,"Colombia", 1, "Actor");
let actor2= new Professional ("Carrie Fisher", 60, 60, 1.85, false,"Colombia", 1, "Actriz");
let actores = [actor1,actor2];

pelicula1.actors = actores;
pelicula1.director = director;
pelicula1.writer = escritor;
pelicula1.language = "Inglés";
pelicula1.plataforma = "Disney";
pelicula1.isMCU = true; 
pelicula1.mainCharacterName = "Lucas"; 
pelicula1.producer ="Disney";
pelicula1.distributor = "Fox";

let imdb = new IMDb([pelicula1, pelicula2, pelicula3]);

// Convertir imdb en un string y guardarlo en .json

let imdbString = JSON.stringify({ peliculas: imdb.movies });
fs.writeFileSync('imdbBBDD.json', imdbString, 'utf-8');

// Leer el fichero .json 

let imdbData = fs.readFileSync('imdbBBDD.json', 'utf-8');
let imdbObj = JSON.parse(imdbData);

let imdbFromFile = new IMDb(imdbObj.peliculas); 
console.log(imdbFromFile.mostrarListado());