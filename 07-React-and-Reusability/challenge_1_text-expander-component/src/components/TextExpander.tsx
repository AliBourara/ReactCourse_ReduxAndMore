import { useState } from "react";

interface TextExpanderViewProp {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
  children: string;
}

const TextExpander = ({
  collapsedNumWords = 20,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor,
  expanded = false,
  className,
  children,
}: TextExpanderViewProp) => {
  const [isExpended, setIsExpended] = useState<boolean | undefined>(expanded);

  const displayText = isExpended
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    margin: " 6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpended((isExpended) => !isExpended)}
        style={buttonStyle}
      >
        {isExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
