import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function AddMovie() {

  const [name, setName] = useState();
  const [poster, setPoster] = useState();
  const [rating, setRating] = useState();
  const [summary, setSummary] = useState();
  const [trailer, setTrailer] = useState();

  const history = useHistory();

  const addMovie = () => {
    
    const newMovie = { name: name, poster: poster, rating: rating, summary: summary, trailer: trailer };
    
    fetch("https://62d5ee0dd4406e523562b8ce.mockapi.io/movies",{
      method : "POST",
      body : JSON.stringify(newMovie),
      headers : {
        "Content-Type" : "application/json"
      }
    })
     
    .then((data)=>data.json)
    .then(()=>history.push('/movies'))

  }




  return (

    <div className="add-movie-btn">

      <TextField value={name} onChange={(event) => { setName(event.target.value); }} label="Name" variant="outlined" />
      <TextField value={poster} onChange={(event) => { setPoster(event.target.value); }} label="Poster" variant="outlined" />
      <TextField value={rating} onChange={(event) => { setRating(event.target.value); }} label="Rating" variant="outlined" />
      <TextField value={summary} onChange={(event) => { setSummary(event.target.value); }} label="Summary" variant="outlined" />
      <TextField value={trailer} onChange={(event) => { setTrailer(event.target.value); }} label="Trailer" variant="outlined" />
      <Button variant="outlined" onClick={addMovie}>Add Movie</Button>

    </div>

  );
}
