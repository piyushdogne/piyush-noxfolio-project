'use client'
import Link from "next/link";
import { useState } from "react";

const Services = ({ services }) => {
 let count = 0;
  if(!services) return <p></p> 
 
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 `}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service._id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {count+=1}.
                </div>
                <div className="content">
                  <h4>{service.name}</h4>
                  <p>{service.desc}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Services;

export const Services2 = ({services}) => {
  if(!services) return <p></p> 
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> my services area
              </span>
              <h2>MY SERVICE AREA</h2>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
         {
          services.slice(0,5).map(item=>{
            return(
              <div className="service-item-two wow fadeInUp delay-0-2s">
              <div className="icon">
                <img src={item.image.url} alt="Icon" />
              </div>
              <h5 className="title">
                <a href="#">{item.name}</a>
              </h5>
              <div className="text">
                {item.desc}
              </div>
              <ul className="list">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp; Mobile app</li>
              </ul>
              <a href="#" className="details-btn">
                <i className="fal fa-long-arrow-right" />
              </a>
            </div>
            )
          })
         }
          
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};
