import { IMDb } from "./IMDb";
import { Movie } from "./Movie";

let pelicula1 = new Movie ("Star Wars", 1960, "Estados Unidos", "Ciencia ficción");
let pelicula2 = new Movie ("Dune", 1960, "Estados Unidos", "Ciencia ficción");
let pelicula3 = new Movie ("Parasitos", 1960, "Estados Unidos", "Drama");

let imdb = new IMDb([pelicula1, pelicula2, pelicula3]);

imdb.mostrarListado();

