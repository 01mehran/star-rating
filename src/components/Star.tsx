// Components;
import EmpyStar from "./EmpyStar";
import FullStar from "./FullStar";

// Types;
import type { StarProps } from "../types/Types";

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

export default Star;
