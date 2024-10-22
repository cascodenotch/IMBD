import { Professional } from "./Professional";

export class Movie {

public title: string
public releaseYear: number
public actors: Professional[]
public nacionality: string
public director: Professional
public writer: Professional
public language: string
public plataforma: string
public isMCU: boolean
public mainCharacterName: string
public producer: string
public distributor: string
public genre: string

constructor (title:string, releaseYear: number, nationality:string, genre: string){
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nationality; 
    this.genre = genre; 
}

public mostrarDatos ():string{

    let datos = "Título: " + this.title +
    "\nAño: " + this.releaseYear +
    "\nActores: " + this.actors +
    "\nNacionalidad: " + this.nacionality +
    "\nDirector: " + this.director +
    "\nEscritor: " + this.writer +
    "\nIdioma: " + this.language +
    "\nPlataforma: " + this.plataforma +
    "\nMCU: " + this.isMCU +
    "\nPersonaje principal: " + this.mainCharacterName +
    "\nProductor: " + this.producer +
    "\nDistribuidor: " + this.distributor +
    "\nGenero: " + this.genre;
    
    console.log (datos);
    return datos; 
}

}