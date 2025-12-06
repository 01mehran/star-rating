import { useState } from "react";
import FullStar from "./FullStar";
import EmpyStar from "./EmpyStar";

type StarRatingProps = {
  maxRate?: number;
  color?: string;
  size?: number;
  defaultRate?: number;
};

type StarProps = {
  onRate?: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color?: string;
  size?: number;
};

function StarRating({
  maxRate = 5,
  color = "#fcc419",
  size = 48,
  defaultRate = 0,
}: StarRatingProps) {
  const [rating, setRating] = useState<number | null>(defaultRate);
  const [tempRating, setTempRating] = useState<number | null>(null);

  const handleSetRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="flex items-start justify-center ">
      <div className="flex items-center w-full justify-center">
        <div className="flex ">
          {Array.from({ length: maxRate }, (_, i) => (
            <Star
              key={i}
              onRate={() => handleSetRating(i + 1)}
              full={tempRating ? tempRating >= i + 1 : (rating ?? 0) >= i + 1}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              color={color}
              size={size}
            />
          ))}
        </div>
        <p
          className="text-3xl "
          style={{ color: color, minWidth: "20px", fontSize: `${size}px` }}
        >
          {tempRating || rating || ""}
        </p>
      </div>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }: StarProps) {
  return (
    <span
      role="button"
      className="h-10 w-10 cursor-pointer"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {full ? (
        //  Full star;
        <FullStar size={size} color={color} />
      ) : (
        //  Empty star
        <EmpyStar size={size} color={color} />
      )}
    </span>
  );
}

export default StarRating;
