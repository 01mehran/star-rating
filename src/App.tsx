import StarRating from "./StarRating";

function App() {
  return (
    <div className="h-dvh bg-slate-500 pt-24    ">
      <div className="flex flex-col space-y-3 items-start mx-auto w-fit">
        <StarRating />
        <StarRating maxRate={8} />
        <StarRating maxRate={10} />
      </div>
    </div>
  );
}

export default App;
