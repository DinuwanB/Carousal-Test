import Carousel from "../components/Carousel.component";

const CarousalPage = () => {
  return (
    <>
      <Carousel Slides="2" Infinite={false} />
      <Carousel Slides="4" Infinite={true} />
    </>
  );
};

export default CarousalPage;
