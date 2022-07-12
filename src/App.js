import './App.css';




function Movie ({name,poster,rating,summary}) {

   const styles = { color: rating>=8 ? "red" : "teal"} 

  return(
    <div className="movie-container" >
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs" >
      <h3 className="movie-name" >{name}</h3>
      <p style={styles} className="movie-rating" >⭐{rating}</p>
      </div>
      <p className="movie-summary" >{summary}</p>
    </div>
  )
}

function MovieList ({movies}) {
  return (
    <div className="movie-list">
    {movies.map(({name,poster,rating,summary})=> <Movie name={name} poster={poster} rating={rating} summary={summary} />)}
    </div>
  );
}


function App() {

  const movies = [
    {
      name :"Kaithi(2019)",
      poster:"https://i.pinimg.com/originals/7d/9f/97/7d9f9738122bd0df2905600c2548d211.jpg",
      rating:8.5,
      summary:"Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy."
    },
    {
      name :"Asuran(2019)",
      poster:"https://m.media-amazon.com/images/M/MV5BMDgwZWUyYzctOGU1NC00ZTFkLTgxM2EtNGU0ZWUwY2Y3YjhkXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating:9,
      summary:"The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story."
    },
    {
      name :"KGF1(2018)",
      poster:"https://wallpaperaccess.com/full/2365094.jpg",
      rating:8,
      summary:"In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine."
    },
    {
      name :"KGF2(2022)",
      poster:"https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2019/k-g-f-chapter-2/k-g-f-chapter-2-poster-4.jpg",
      rating:7.5,
      summary:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy."
    },
    {
      name :"Baahubali1(2015)",
      poster:"https://pbs.twimg.com/media/CIuhPFwUkAAJPuO.jpg",
      rating:8,
      summary:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples."
    },
    {
      name :"Baahubali2(2017)",
      poster:"https://st1.bollywoodlife.com/wp-content/uploads/2017/04/Baahubali-2-6.jpg",
      rating:8,
      summary:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."
    },
  ]

  
  return (
    <div className="App">

    <MovieList movies={movies} />
    
    
    </div>
  );
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