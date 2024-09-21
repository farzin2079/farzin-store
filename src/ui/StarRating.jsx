import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Stars = styled.div`
  display: flex;
`;

const StarStyle = styled.div`
  height: ${(props) => (props.$size ? `${props.$size}px` : "24px")};
  width: ${(props) => (props.$size ? `${props.$size}px` : "24px")};

  &.hovered svg {
    fill: #feec00;
  }
`;

const Text = styled.p`
  line-height: 1;
  margin: 0;
  font-size: ${(props) => (props.$size ? `${props.$size}px` : "23px")};
  padding-top: ${(props) => (props.$size ? `${props.$size}px` : "0")};
`;

export default function StarRating({ maxRating = 5, onRating, size }) {
  const [rate, setRate] = useState(0);
  const [hovredStar, setHovredStar] = useState(0);

  function handelRating(rated) {
    setRate(rated);
    onRating(rated);
  }

  return (
    <Wrapper>
      <Stars>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handelRating(i + 1)}
            rated={rate >= i + 1}
            hovered={hovredStar >= i + 1}
            onHoverIn={() => setHovredStar(i + 1)}
            onHoverOut={() => setHovredStar(0)}
            size={size}
          />
        ))}
      </Stars>
      <Text $size={size}> {hovredStar ? hovredStar : rate} </Text>
    </Wrapper>
  );
}

function Star({ onRate, rated, onHoverIn, onHoverOut, hovered, size }) {
  return (
    <StarStyle
      className={hovered ? "hovered" : ""}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      $size={size}
    >
      {rated ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fcc419"
          stroke="#fcc419"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fcc419"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </StarStyle>
  );
}
