import { useState } from 'react';
import { Counter } from "./Counter";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



export function Movie({ name, poster, rating, summary,deleteButton }) {

  const [show, setShow] = useState(true);
  // const [showmovie, setShowmovie] = useState(false);


  const styles = { color: rating >= 8 ? "green" : "red" };

  const styles1 = { display: show ? "none" : "block" };

  // const styles2 = { display: showmovie ? "none" : "block" };


  return (
    <div className="movie-container">
      <Card>
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}
        <Button  onClick={() => { setShow(!show); }}>
        {show?<ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
        </h3>
        <p style={styles} className="movie-rating">⭐{rating}</p>
      </div>
      <p style={styles1} className="movie-summary">{summary}</p>
      </CardContent>
      <CardActions>
      <div className='delete-button'>
      <Counter />
      {deleteButton}
      {/* <button onClick={() => { setShowmovie(!showmovie); }}>Delete</button><br /> */}
      </div>
      </CardActions>
      </Card>
    </div>
  );
}
