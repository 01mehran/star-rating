export type StarsIconProps = {
  size?: number;
  color?: string;
};

export type StarProps = {
  onRate?: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color?: string;
  size?: number;
};

export type StarRatingProps = {
  maxRate?: number;
  color?: string;
  size?: number;
  defaultRate?: number;
  messages?: string[];
  onSetRating?: (rate: number) => void;
};
