import { Movie } from "./Movie";

export class IMDb{
    
    public movies: Movie[];

    constructor (movies:Movie[]){
        this.movies = movies; 
    }

    public mostrarListado ():string{

        let resultado = "";

        for (let i=0; i<this.movies.length; i++){
        resultado = resultado +this.movies[i].mostrarDatos();
        }

        console.log (resultado);
        return resultado;

    }
}