import StarRating from "./StarRating";

function App() {
  return (
    <div className="h-dvh bg-slate-900 pt-12 w-full">
      <StarRating />;
      <StarRating color="green" maxRate={8} size={32} />;
      <StarRating color="red" maxRate={10} size={26} defaultRate={3} />;
    </div>
  );
}

export default App;
