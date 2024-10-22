import { Movie } from "./Movie";
import { Professional } from "./Professional";

let pelicula1 = new Movie ("Dracula", 1960, "Estados Unidos", "Terror");
let profesional1 = new Professional ("Maria", 30, 50, 1.70, true,"España", 1, "Directora");
let profesional2 = new Professional ("Pepito", 60, 60, 1.85, false,"Colombia", 1, "Asistente dirección");

pelicula1.mostrarDatos();