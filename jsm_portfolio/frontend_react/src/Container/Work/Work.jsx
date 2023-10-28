import React from "react";
import { motion } from "framer-motion";
import { images } from "../../Constants";
//import { AppWrap } from "../../wrapper";

import "./Work.scss";

const work = [
  {
    title: "Web Development",
    //description: "We have the best web developers.",
    imgUrl: images.WebDev,
  },
  {
    title: "App Development",
    //description: "We have best developers for  applications.",
    imgUrl: images.AppDev,
  },
  {
    title: "SEO",
    //description: "Professionals in Ranking of Websites.",
    imgUrl: images.SEO,
  },
  {
    title: "Data Engineering",
    //description: "We have the best Data Engineers.",
    imgUrl: images.DataEng,
  },
];

const Work = () => {
  return (
    <div id="What we do">
      {/* <h2 className="head-text">
        What We <span>Do</span>
      </h2> */}

      <motion.div className="app__work-portfolio">
        {work.map((workItem, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={workItem.imgUrl} alt={workItem.title} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{workItem.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {workItem.description}
              </p>

              {/* You can add other content here if needed... */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
