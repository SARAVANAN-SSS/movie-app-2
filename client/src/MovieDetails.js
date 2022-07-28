import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const { name, rating, summary, trailer } = movie;
  const getMovie = () => {
    
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => {console.log(mv);setMovie(mv.data.moviee[0])});
  };
  useEffect(getMovie, []);

  return (
    <div className="movie-details">
      <div className="movie-trailer">
        <iframe
          width="700"
          height="409"
          src={trailer}
          title="Kaithi 2020 Official Trailer Hindi Dubbed | Karthi, Narain, Arjun Das"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        ></iframe>
      </div>
      <div className="movie-sspecs">
        <h2>Movie Details of {name}</h2>
        <p className="movie-rating">
          <b>Rating : </b>⭐{rating}
        </p>
        <p className="movie-summary">
          <b>Summary : </b>
          {summary}
        </p>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
