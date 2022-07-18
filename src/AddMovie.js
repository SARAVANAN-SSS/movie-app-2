import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function AddMovie({ movieList, setMovieList }) {

  const [name, setName] = useState();
  const [poster, setPoster] = useState();
  const [rating, setRating] = useState();
  const [summary, setSummary] = useState();
  const history = useHistory();


  return (

    <div className="add-movie-btn">

      <TextField onChange={(event) => { setName(event.target.value); }} label="Name" variant="outlined" />
      <TextField onChange={(event) => { setPoster(event.target.value); }} label="Poster" variant="outlined" />
      <TextField onChange={(event) => { setRating(event.target.value); }} label="Rating" variant="outlined" />
      <TextField onChange={(event) => { setSummary(event.target.value); }} label="Summary" variant="outlined" />

      <Button variant="outlined" onClick={() => {
        history.push('/movies');
        const newMovie = { name: name, poster: poster, rating: rating, summary: summary };
        setMovieList([...movieList, newMovie]);
      }}>Add Movie</Button>

    </div>

  );
}
