import React, { useState, useEffect } from "react";
import { Image } from "antd";
import Axios from "axios";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./carousal.css";

const Carousel = (props) => {
  const { Slides, Infinite } = props;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (currentImageIdx !== 0) {
      let idx = currentImageIdx - 1;
      setCurrentImagIdx(idx);
    }
  };

  const nextSlide = () => {
    if (Infinite === true && currentImageIdx >= images.length - 1) {
      setCurrentImagIdx(0);
    }

    if (currentImageIdx < images.length - 1) {
      let idx = currentImageIdx + 1;
      setCurrentImagIdx(idx);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await Axios.get(
        `http://localhost:3006/api/carousal?slides=${Slides}`
      );
      setImages(data.data);
    }

    fetchData();
  }, [Slides]);

  return (
    <>
      <div className="container">
        <Image
          width={windowSize.width}
          height={windowSize.height}
          preview={false}
          src={images[currentImageIdx]?.imgUrl}
        />
        {images.length === 1 ? (
          <></>
        ) : (
          <div className="top-left" onClick={prevSlide}>
            <LeftOutlined style={{ fontSize: "40px", fontWeight: 800 }} />
          </div>
        )}
        {images.length === 1 ? (
          <></>
        ) : (
          <div className="top-right" onClick={nextSlide}>
            <RightOutlined style={{ fontSize: "40px", fontWeight: 800 }} />
          </div>
        )}
        <div className="centered">{images[currentImageIdx]?.title}</div>
        <div className="centered-2">{images[currentImageIdx]?.subtitle}</div>
      </div>
    </>
  );
};

export default Carousel;
