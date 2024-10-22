import { Professional } from "./Professional";

export class Movie {

public title: string
public releaseYear: number
public actors: Professional[]
public nationality: string
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
    this.nationality = nationality; 
    this.genre = genre; 
    this.actors =[];
    this.director = new Professional("", 0, 0,0, true, "", 0, "");
    this.writer = new Professional("", 0, 0,0, true, "", 0, "");
    this.language = "";
    this.plataforma = "";
    this.isMCU = true;
    this.mainCharacterName = "";
    this.producer = "";
    this.distributor = "";
}

// Para mostrar el array de actores 
public mostrarActores(): string{
    let actores = "";
    for (let i =0; i<this.actors.length; i++){
    actores = actores + this.actors[i].mostrarAtributo()+ "\n"
    }
    return actores;
}

// Para mostrar los datos de la película 
public mostrarDatos ():string{

    let datos = "Título: " + this.title +
    "\nAño: " + this.releaseYear +
    "\nActores: " + this.mostrarActores()+
    "\nNacionalidad: " + this.nationality +
    "\nDirector: " + this.director.mostrarAtributo() +
    "\nEscritor: " + this.writer.mostrarAtributo() +
    "\nIdioma: " + this.language +
    "\nPlataforma: " + this.plataforma +
    "\nMCU: " + this.isMCU +
    "\nPersonaje principal: " + this.mainCharacterName +
    "\nProductor: " + this.producer +
    "\nDistribuidor: " + this.distributor +
    "\nGenero: " + this.genre;
    
   
    return datos; 
}

}