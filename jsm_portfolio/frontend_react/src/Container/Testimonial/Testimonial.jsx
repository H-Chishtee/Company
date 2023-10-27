import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
//import { motion } from "framer-motion";
import { images } from "../../Constants";
//import { AppWrap, MotionWrap } from "../../wrapper";
//import { urlFor, client } from "../../client";
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
        "PROJJEXX completely revolutionised our IOS and android app. The team was great at taking our thoughts and idea and implanting them quickly. Osman managed the whole process smoothly and I would definitley trust him and team again for future work.",
      imgurl: images.Client2, // Replace with the image URL
    },
    {
      name: "BetterHomes",
      company: "BetterHomes Real Estate",
      feedback:
        "We are a new Real Estate business based in the North of England. The guys at PROJJEXX helped oversee and manage the creation of our website and property management system. We look forward to working with you guys again in the future.",
      imgurl: images.Client3, // Replace with the image URL
    },
    // Add more testimonial objects as needed
  ];

  // Define hardcoded brand data
  // const brands = [
  //   {
  //     name: "Brand 1",
  //     imgUrl: "url-to-brand-image1.jpg", // Replace with the image URL
  //   },
  //   {
  //     name: "Brand 2",
  //     imgUrl: "url-to-brand-image2.jpg", // Replace with the image URL
  //   },
  //   // Add more brand objects as needed
  // ];
  //const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="main">
            <div className="app__testimonial-item app__flex">
              <img
                src={testimonials[currentIndex].imgurl}
                alt={testimonials[currentIndex].name}
              />
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">
                    {testimonials[currentIndex].name}
                  </h4>
                  <h5 className="p-text">
                    {testimonials[currentIndex].company}
                  </h5>
                  <div className="icon">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default Testimonial;
