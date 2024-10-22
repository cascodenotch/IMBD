import { Professional } from "./Professional";

let profesional1 = new Professional ("Maria", 30, 50, 1.70, true,"España", 1, "Directora");
let profesional2 = new Professional ("Pepito", 60, 60, 1.85, false,"Colombia", 1, "Asistente dirección");

console.log(profesional1.mostrarAtributo());
console.log(profesional2.mostrarAtributo());