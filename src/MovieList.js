import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


export function MovieList({ movies,setMovieList }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary },index) => <Movie 
      
      deleteButton={<Button
      
      onClick={()=>{

        const deleteIndex = index;

        const remainingMovies = movies.filter((mv,idx)=> deleteIndex !==idx );

        setMovieList(remainingMovies);

      }}>
      <IconButton aria-label="delete" color="error">
       <DeleteIcon />
      </IconButton>
      </Button>}
      
      name={name} poster={poster} rating={rating} summary={summary} />)}
    </div>
  );
}
