import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

const baseurl =
  "https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(baseurl);
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
