import { useState } from "react";
import StarRating from "./StarRating";

function App() {
  return (
    <div className="h-dvh bg-slate-900 w-full pt-12">
      <StarRating />;
      <StarRating color="green" maxRate={8} size={32} />;
      <StarRating color="red" maxRate={10} size={26} defaultRate={3} />
      <StarRating
        color="pink"
        maxRate={5}
        size={32}
        messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
      />
      <MovieRatingStar />
    </div>
  );
}

function MovieRatingStar() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="purple" maxRate={10} onSetRating={setMovieRating} />
      <p className="text-center text-purple-500">
        This movie was rated {movieRating || "(not rated yet!)"} stars.
      </p>
    </div>
  );
}

export default App;
