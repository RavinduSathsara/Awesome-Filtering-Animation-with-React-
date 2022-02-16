import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

const baseurl =
  "https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(baseurl);
    const movies = await data.json();
    setPopular(movies.results);
    setFilterd(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFilterd={setFilterd}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
