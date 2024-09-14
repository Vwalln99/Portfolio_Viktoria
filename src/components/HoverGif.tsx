import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  cursor: pointer;
`;

const StaticImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isHovered ? 0 : 1)};
`;

const AnimatedImage = styled.img<{ isHovered: boolean }>`
  width: 110%;
  height: 110%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export default function HoverGif(){
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ImageContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <StaticImage src="src/images/image2.png" alt="Static"  isHovered={isHovered} />
      
      <AnimatedImage
        src="src/images/image2-animated.GIF"
        alt="Animated"
        isHovered={isHovered}
      />
    </ImageContainer>
  );
};
