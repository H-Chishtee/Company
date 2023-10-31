import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { images } from "../../Constants";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define hardcoded testimonial data
  const testimonials = [
    {
      name: "RoofTop Living",
      company: "ROOFTOP LIVING",
      feedback:
        "PROJJEXX helped us with our property management system and made sure all of our systems ran seamlessly and efficiently from front to back. Friendly, talented professionals and very responsive",
      imgurl: images.Client1, // Replace with the image URL
    },
    {
      name: "Haris @ UOWN",
      company: "UOWN",
      feedback:
        "PROJJEXX completely revolutionised our iOS and Android app. The team was great at taking our thoughts and ideas and implementing them quickly. Osman managed the whole process smoothly, and I would definitely trust him and his team again for future work.",
      imgurl: images.Client2, // Replace with the image URL
    },
    {
      name: "BetterHomes",
      company: "BetterHomes Real Estate",
      feedback:
        "We are a new Real Estate business based in the North of England. The team at PROJJEXX helped oversee and manage the creation of our website and property management system. We look forward to working with them again in the future.",
      imgurl: images.Client3, // Replace with the image URL
    },
    // Add more testimonial objects as needed
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setCurrentIndex(currentSlide);
    },
  };

  return (
    <div className="main">
      {testimonials.length > 0 && (
        <Slider {...slickSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="app__testimonial-item app__flex">
              <img src={testimonial.imgurl} alt={testimonial.name} />
              <div className="app__testimonial-content">
                <p className="p-text">{testimonial.feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonial.name}</h4>
                  <h5 className="p-text">{testimonial.company}</h5>
                  <div className="icon">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {/* <div className="app__testimonial-btns app__flex">
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
