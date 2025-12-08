import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  maxRate?: number;
  color?: string;
  size?: number;
  defaultRate?: number;
  messages?: string[];
};

function StarRating({
  maxRate = 5,
  color = "#fcc419",
  size = 48,
  defaultRate = 0,
  messages = [],
}: StarRatingProps) {
  const [rating, setRating] = useState<number | null>(defaultRate);
  const [tempRating, setTempRating] = useState<number | null>(null);

  const handleSetRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="flex justify-center ">
      <div className="flex items-center w-full justify-center min-h-20 gap-4 ">
        <div className="flex items-start">
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
          className="text-3xl w-12 "
          style={{ color: color, minWidth: "20px", fontSize: `${size}px` }}
        >
          {messages.length === maxRate
            ? messages[tempRating ? tempRating - 1 : (rating ?? 0) - 1]
            : tempRating || rating || ""}
        </p>
      </div>
    </div>
  );
}

export default StarRating;
