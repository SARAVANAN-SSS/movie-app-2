import { useHistory, useParams } from 'react-router-dom';

export function MovieDetails({ movieList }) {

  const history = useHistory();

  const { id } = useParams();
  return (
    <div className='movie-details'>

      <div className='movie-trailer'>

        <iframe width="700" height="409" src={movieList[id].trailer} title="Kaithi 2020 Official Trailer Hindi Dubbed | Karthi, Narain, Arjun Das" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

        </iframe></div>

      <div className='movie-sspecs'>
        <h2>Movie Details of {movieList[id].name}</h2>
        <p className="movie-rating"><b>Rating : </b>⭐{movieList[id].rating}</p>
        <p className="movie-summary"><b>Summary : </b>{movieList[id].summary}</p>
        <button onClick={() => { history.goBack(); }}>Back</button>
      </div>
    </div>
  );
}
