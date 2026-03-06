// Components;
import MovieRatingStar from "./MovieRatingStar";
import StarRating from "./StarRating";

function MainStars() {
  return (
    <div className="min-h-dvh bg-slate-900 w-full pt-12">
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

export default MainStars;
