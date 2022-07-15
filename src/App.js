import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, Route, Switch, Redirect, useHistory, useParams } from 'react-router-dom';
import './App.css';
import { MovieList } from './MovieList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


function App() {

   

  const INITIAL_MOVIES = [
    {
      name :"Kaithi(2019)",
      poster:"https://i.pinimg.com/originals/7d/9f/97/7d9f9738122bd0df2905600c2548d211.jpg",
      rating:8.5,
      summary:"Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
      trailer:"https://www.youtube.com/embed/hxPjWqyIhVA"
    },
    {
      name :"Asuran(2019)",
      poster:"https://m.media-amazon.com/images/M/MV5BMDgwZWUyYzctOGU1NC00ZTFkLTgxM2EtNGU0ZWUwY2Y3YjhkXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating:9,
      summary:"The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story.",
      trailer:"https://www.youtube.com/embed/vOCM9wztBYQ"
    },
    {
      name :"KGF1(2018)",
      poster:"https://wallpaperaccess.com/full/2365094.jpg",
      rating:8,
      summary:"In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
      trailer:"https://www.youtube.com/embed/-KfsY-qwBS0"
    },
    {
      name :"KGF2(2022)",
      poster:"https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2019/k-g-f-chapter-2/k-g-f-chapter-2-poster-4.jpg",
      rating:7.5,
      summary:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
      trailer:"https://www.youtube.com/embed/JKa05nyUmuQ" 
    },
    {
      name :"Baahubali1(2015)",
      poster:"https://pbs.twimg.com/media/CIuhPFwUkAAJPuO.jpg",
      rating:8,
      summary:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
      trailer:"https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      name :"Baahubali2(2017)",
      poster:"https://st1.bollywoodlife.com/wp-content/uploads/2017/04/Baahubali-2-6.jpg",
      rating:8,
      summary:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
      trailer:"https://www.youtube.com/embed/qD-6d8Wo3do"
    },
  ]
  
  const [movieList,setMovieList] = useState(INITIAL_MOVIES)
  
  return (
    <div className="App">
      {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> */}
      <nav className='navigation'>
      
          <Link to="/">Home</Link>
        
          <Link to="/movies">Movies</Link>

          <Link to="/films">Films</Link>
        
          <Link to="/movie/add">Add Movie</Link>
        
          <Link to="/color-game">Color Game</Link>
     
      </nav>
      {/* </Toolbar>
      </AppBar>
      </Box> */}

      <Switch>
       
      <Route path="/movie/add"> <AddMovie movieList={movieList} setMovieList={setMovieList} /> </Route> 
      <Route path="/movie/:id"> <MovieDetails movieList={movieList} /> </Route> 
      <Route path="/movies"> <MovieList movies={movieList} setMovieList={setMovieList} /> </Route>
      <Route path="/films"><Redirect to="/movies" /></Route>
      <Route path="/color-game"><AddColor /></Route>
      <Route exact path="/">Welcome to Movie App</Route>
      <Route path="**"> <NotFound /> </Route>
    
      </Switch>
      </div>
  );
}

function MovieDetails({ movieList }) {

  const history = useHistory()

  const {id} = useParams();
  return (
    <div className='movie-details'>
      
      <div className='movie-trailer'>
       
       <iframe width="700" height="409" src={movieList[id].trailer} title="Kaithi 2020 Official Trailer Hindi Dubbed | Karthi, Narain, Arjun Das" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

       </iframe></div>

       <div className='movie-sspecs'>
       <h2>Movie Details of {movieList[id].name}</h2>
       <p className="movie-rating"><b>Rating : </b>⭐{movieList[id].rating}</p>
      <p className="movie-summary"><b>Summary : </b>{movieList[id].summary}</p>
      <button onClick={()=>{ history.goBack() }}>Back</button>
      </div>
    </div>
  )
}

function NotFound() {
  return(
    <div className='not-found'>
      <h1>404 - Page Not Found</h1>
    </div>
  )
}

function AddMovie({ movieList,setMovieList }) {

  const [name,setName] = useState();
  const [poster,setPoster] = useState();
  const [rating,setRating] = useState();
  const [summary,setSummary] = useState();
  const history = useHistory()


  return(

    <div className="add-movie-btn">
      
      <TextField onChange={(event)=>{setName(event.target.value)}} label="Name" variant="outlined" />
      <TextField onChange={(event)=>{setPoster(event.target.value)}} label="Poster" variant="outlined" />
      <TextField onChange={(event)=>{setRating(event.target.value)}} label="Rating" variant="outlined" />
      <TextField onChange={(event)=>{setSummary(event.target.value)}} label="Summary" variant="outlined" />
      
      <Button variant="outlined" onClick={()=>{
      history.push('/movies')
      const newMovie={name:name,poster:poster,rating:rating,summary:summary}
      setMovieList([...movieList,newMovie])}}>Add Movie</Button>

      </div>

  )
}


function AddColor () {

  const[color,setColor] = useState("gold")
  // const colorList = ["teal","green","crimson"]
  const[colorList,setColorList] = useState(["teal","green","crimson"])

  const styles2 = { backgroundColor: color }
  return(
    <div>
      <input value={color} onChange={(event)=> setColor(event.target.value)} style={styles2} placeholder='Enter a Color' />
      <button onClick={()=>setColorList([...colorList,color])}>Add Color</button>
      {colorList.map((color)=><ColorBox color={color} />)}
    </div>
  )
}


function ColorBox ({color}) {
  const styles = {
    backgroundColor:color,
    height:"20px",
    width:"250px",
    marginTop:"5px" 
  } 
  return(
    <div style={styles}></div>
  )
}

export default App;





// function Welcome(props) {
//   const {name,pic} = props;
//   return(
//   <div>
//     <h2>Hey {name}<span>👋❗❗❗</span></h2>
//     <img className = "img" src={pic} alt="swiss" />
//   </div>
//   );
// }



// const profiles = [
  //   {name:"Mani" ,
  //   pic : "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/9d08e0b6-8de0-4381-8dd8-85f7f9ba1bab/villages-in-switzerland.jpg"},
  //   {
  //     name:"Vani" ,
  //     pic : "https://i.pinimg.com/originals/f3/67/6e/f3676ee25dd61cd9fde441b9d6542bd5.jpg" 
  //   },
  //   {
  //     name:"Rani",
  //     pic : "https://media.istockphoto.com/photos/lake-view-in-lungern-or-lungerersee-in-obwalden-switzerland-picture-id1132987764?b=1&k=20&m=1132987764&s=170667a&w=0&h=2SxlY0ExD0pQ01ItF8_fUjyL4HiiMKtNtvdFeFRvcBU="
  //   }
  // ]



{/* {profiles.map(({name,pic})=>
      <Welcome name={name} pic={pic} />
    )} */}


      {/* <Welcome name="Mani" url = "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/9d08e0b6-8de0-4381-8dd8-85f7f9ba1bab/villages-in-switzerland.jpg" />
      <Welcome name="Vani" url = "https://i.pinimg.com/originals/f3/67/6e/f3676ee25dd61cd9fde441b9d6542bd5.jpg" />
      <Welcome name="Rani" url = "https://media.istockphoto.com/photos/lake-view-in-lungern-or-lungerersee-in-obwalden-switzerland-picture-id1132987764?b=1&k=20&m=1132987764&s=170667a&w=0&h=2SxlY0ExD0pQ01ItF8_fUjyL4HiiMKtNtvdFeFRvcBU=" /> */}