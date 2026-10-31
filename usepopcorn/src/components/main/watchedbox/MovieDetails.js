import { useEffect, useState } from "react";
import StarRating from "../../StarRating.js";
import Loader from "../../Loader.js";

export default function MovieDetails({ selectedId, onCloseMovie, apiKey }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  console.log(title, year);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const result = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`,
        );

        const data = await result.json();
        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedId],
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Post of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb Rating
              </p>
            </div>
          </header>

          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
            <div>
              <StarRating maxRating={10} size={24} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}
