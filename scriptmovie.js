class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Testing the getPG method
  const movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "R"),
    new Movie("Movie 4", "Studio D", "PG")
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  