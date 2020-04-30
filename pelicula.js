/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
  aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película.
  */

class Peliculas {

  PATRON_IMDB = /^(\D{2})(?=\d{7})/;
  PATRON_SCORE = /^(\d+)\.(?=\d)/;
  
  GENERO = `Action, Adult, Adventure, Animation, Biography, Comedy,
   Crime, Documentary ,Drama, Family, Fantasy, 
   Film Noir, Game-Show, History, Horror, Musical, 
   Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
   Short, Sport, Talk-Show, Thriller, War, Western`.trim().split(',');
  
  constructor(IMDB,titulo,director,premierYear,countryOg,gender,score){

    if (IMDB.length != 9) return console.error('IMDB debe tener 9 caracteres.');
    
    if(!this.PATRON_IMDB.test(IMDB))
      return console.error(`Patron IMDB incorrecto : 9 caracteres, 2 letras 7 números.\nEje: AA1234567`);  
    
    if(titulo.length > 100) return console.error(`Titulos contiene mas de 100 caracteres.`);
    
    if(director.length > 50) return console.error(`Director contiene mas de 50 carecteres.`);

    if(premierYear.length < 1900 || premierYear.length > 3000)
      return console.error("Fecha incorrecta");
    
    if(!countryOg instanceof Array) return console.error('Separe los paises con coma.');

    if(gender instanceof Array) return console.error('Separe los generos con coma');

    if(!this.PATRON_SCORE.test(`${score}`)) return console.error('Número entre 0 y 10 pudiendo ser decimal de una posición')

    this.IMDB = IMDB;
    this.titulo = titulo;
    this.director = director;
    this.premierYear = premierYear;
    this.countryOg = countryOg;
    this.gender = gender;
    this.score = score;
  }

  fichaTecnica () {
    return `    ID_IMDB: ${this.IMDB};
    Titulo: ${this.titulo};
    Directo: ${this.director};
    Estreno: ${this.premierYear};
    Pais: ${this.countryOg};
    Genero: ${this.gender};
    Calificación: ${this.score}`;
  }
};

const movie = new Peliculas('AA1234567','Scarrrrrr', 'Juan fr', 1998, 'EEUU', 'Family', 4.4);
console.log(movie.fichaTecnica());
