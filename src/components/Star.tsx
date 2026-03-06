import EmpyStar from "./EmpyStar";
import FullStar from "./FullStar";

type StarProps = {
  onRate?: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color?: string;
  size?: number;
};

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
