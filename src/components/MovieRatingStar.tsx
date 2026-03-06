// Hooks;
import { useState } from "react";

// Components;
import StarRating from "./StarRating";

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

export default MovieRatingStar;
