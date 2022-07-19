import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router-dom';

export function EditMovie() {

  const { id } = useParams();
  const [movie,setMovie] = useState()

  const getMovie = () => {
    fetch(`https://62d5ee0dd4406e523562b8ce.mockapi.io/movies/${id}`,{method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  }
  useEffect(getMovie,[])

  return (
    movie ? <UpdateMovie movie={movie} /> : "" 
  );
}


  function UpdateMovie({ movie }) {

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();

  const editMovie = () => {
    
    const updatedMovie = { name, poster, rating, summary, trailer };
    
    fetch(`https://62d5ee0dd4406e523562b8ce.mockapi.io/movies/${movie.id}`,{
      method : "PUT",
      body : JSON.stringify(updatedMovie),
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
      <Button variant="outlined" onClick={editMovie} color='secondary'>Save</Button>

    </div>

  );
}
