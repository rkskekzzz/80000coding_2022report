import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
};

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
};

interface CardSliderProps {
  children: React.ReactNode;
}

export default function SliderWidget({ children }: CardSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return <Slider {...settings}>{children}</Slider>;
}
