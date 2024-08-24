/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.img`
  object-fit: contain;
  aspect-ratio: ${(props) => (props.aspect ? props.aspect : 0)};
`;

function Img({ src, phoneSrc, ...props }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ImgStyle
      src={windowWidth > 768 ? src : phoneSrc ? phoneSrc : src}
      {...props}
    />
  );
}

export default Img;
