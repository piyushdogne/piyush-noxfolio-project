"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectMasonryIsotop = ({projects}) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  if(!projects) return <p>......</p>
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("design")}`}
          onClick={handleFilterKeyChange("design")}
        >
          Design
        </li>
        <li
          className={`c-pointer ${activeBtn("branding")}`}
          onClick={handleFilterKeyChange("branding")}
        >
          Branding
        </li>
        <li
          className={`c-pointer ${activeBtn("marketing")}`}
          onClick={handleFilterKeyChange("marketing")}
        >
          Marketing
        </li>
        <li
          className={`c-pointer ${activeBtn("development")}`}
          onClick={handleFilterKeyChange("development")}
        >
          Development
        </li>
        <li
          className={`c-pointer ${activeBtn("apps")}`}
          onClick={handleFilterKeyChange("apps")}
        >
          Mobile Apps
        </li>
        <li
          className={`c-pointer ${activeBtn("graphics")}`}
          onClick={handleFilterKeyChange("graphics")}
        >
          Graphics
        </li>
      </ul>
      <div className="row project-masonry-active">
       

      {
        projects.slice(0 , 9).map(item=>{
          return(
            <div className="col-xl-4 col-md-6 item branding development">
            <div className="project-item style-three wow fadeInUp delay-0-2s">
              <div className="project-image">
                <img
                  src={item.image.url}
                  alt="Project"
                />
              </div>
              <div className="project-content">
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="sub-title">{item.title}</span>
                <h4>
                  <Link legacyBehavior href="project-details">
                    Mobile Application Design
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
    </Fragment>
  );
};
export default ProjectMasonryIsotop;
