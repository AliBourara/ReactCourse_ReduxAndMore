import { useState } from "react";
import Star from "./Star";
const containerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle: React.CSSProperties = {
  display: "flex",
};

interface StarsRatingViewProp {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (value: number) => void;
}

const StarsRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages,
  defaultRating = 0,
  onSetRating,
}: StarsRatingViewProp) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  const handelRating = (rating: number) => {
    setRating(rating);
    if (onSetRating) onSetRating(rating);
  };

  const textStyle: React.CSSProperties = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onRate={() => handelRating(i + 1)}
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages?.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || undefined}
      </p>
    </div>
  );
};

export default StarsRating;
