import styled from 'styled-components';
import HoverGif from './HoverGif'; 

interface ImageProps {
  src: string;
  alt: string;
  link: string;
  style: {
    width: string;
    height: string;
    transform: string;
    isGif?: boolean;
  };
  caption: string;
}

const images: ImageProps[] = [
  { 
    src: 'src/images/image2.png', 
    alt: 'Bild 1', 
    link: '/resume', 
    style: { width: '350px', height: '450px', transform: 'rotate(10deg)', isGif: true },
    caption: 'CV'
  },
  { 
    src: 'src/images/image1.png', 
    alt: 'Bild 2', 
    link: 'https://github.com/Vwalln99/Portfolio_Viktoria', 
    style: { width: '150px', height: '150px', transform: 'scale(1.2)' , isGif: false },
    caption: 'GitHub Repository'
  },
  { 
    src: 'src/images/image3.png', 
    alt: 'Bild 3', 
    link: 'https://vwalln99.github.io/Moonbucks-Coffee-Shop/', 
    style: { width: '120px', height: '120px', transform: 'rotate(-5deg)' , isGif: false },
    caption: 'Moonbucks Coffee Shop'
  },
  { 
    src: 'src/images/image4.png', 
    alt: 'Bild 4', 
    link: 'https://vwalln99.github.io/A-Normal-Day/', 
    style: { width: '120px', height: '120px', transform: 'rotate(5deg)' , isGif: false },
    caption: 'A Normal Day Game'
  },
  { 
    src: 'src/images/image5.png', 
    alt: 'Bild 5', 
    link: 'https://shopping-cart-spa.vercel.app/', 
    style: { width: '120px', height: '120px', transform: 'rotate(-5deg)' , isGif: false },
    caption: 'Shopping Cart SPA'
  },
  { 
    src: 'src/images/image6.png', 
    alt: 'Bild 6', 
    link: 'https://github.com/Vwalln99', 
    style: { width: '150px', height: '150px', transform: 'scale(1.2)' , isGif: false },
    caption: 'GitHub Profile'
  }
];

const PortfolioContainer = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 
    " image2 image1 image3 ."
    " . image1 . image4"
    " image6 image1 image5 .";
  gap: 30px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-areas: 
      " image2 image1 image3 ."
    " . image1 . image4"
    " image6 image1 image5 .";
  gap: 20px;
  justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-areas: 
      "image1"
      "image2"
      "image3"
      "image4"
      "image5"
      "image6";
  }
      gap: 10px;
  justify-items: center;
  margin-bottom:20px;
  }

`;

const ImageWrapper = styled.div<{ style: any; gridArea: string }>`
  grid-area: ${({ gridArea }) => gridArea};
  cursor: pointer;
  text-align: center;

  img {
    width: ${({ style }) => style.width};
    height: ${({ style }) => style.height};
    object-fit: cover;
    border-radius: 8px;
    transform: ${({ style }) => style.transform};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05) rotateY(10deg);
    }
  }

  p {
    margin-top: -20px;
    font-size: 16px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <h1>Hello!</h1>
      <h2>Click for CV 	↓</h2>
      <GridContainer>
        {images.map((image, index) => (
          <ImageWrapper
            key={index}
            style={image.style}
            gridArea={`image${index + 1}`}
            onClick={() => window.location.href = image.link}
          >
            {image.style.isGif ? (
              <HoverGif />
            ) : (
              <img src={image.src} alt={image.alt} />
            )}
            <p>{image.caption}</p>
          </ImageWrapper>
        ))}
      </GridContainer>
    </PortfolioContainer>
  );
}
