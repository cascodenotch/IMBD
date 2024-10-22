export class Professional {

public name: string
public age: number
public weight: number
public height: number
public isRetired: boolean
public nationality: string
public oscarsNumber: number
public profession: string

constructor (name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){
this.name = name; 
this.age = age; 
this.weight = age; 
this.height = height; 
this.isRetired = isRetired;
this.nationality = nationality; 
this.oscarsNumber =oscarsNumber;
this.profession = profession;
}

public mostrarAtributo():string {
let atributos = "Nombre: " + this.name + 
"\nEdad: " + this.age + 
"\nPeso: "+this.weight + 
"\nAltura: "+this.height + 
"\nRetirado: "+this.isRetired + 
"\nNacionalidad: "+this.nationality + 
"\nNumero de Oscars: "+this.oscarsNumber + 
"\nProfesion: "+this.profession;

console.log (atributos);

return atributos;

}

}