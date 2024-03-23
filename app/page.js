'use client'
import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import {useEffect, useState } from "react";

export default function Home() {

  // change 1 => fetching the data through API

  const [globalClientData , setGlobalClientData] = useState({user:{}})
  useEffect(()=>{
    const fetchGlobalData = async () => {
      try{
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        const responseData = await response.json()
        if(responseData){
          setGlobalClientData(responseData)
        }
      }
      catch(error){
      console.error('Error fetching data' , error)
      }
    }
    fetchGlobalData()
  },[])
  const {user} = globalClientData
   if(!user) return <p></p>

  return (
      
    <NoxfolioLayout >
      {/* Hero Section Start */}
      <Hero about={user.about}/>
      {/* Hero Section End */}
      {/* About Area start */}
      <About email={user.email} about={user.about}/>
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume  timeline={user.timeline}/>
      {/* Resume Area end */}
      {/* Services Area start */}
      <Services services={user.services}/>
      {/* Services Area end */}
      {/* Skill Area start */}
      <Skill skills={user.skills}/>
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects projects={user.projects}/>
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial testimonials={user.testimonials}/>
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      <Pricing pricing={user.services}/>
      {/* Pricing Area end */}
      {/* Contact Area start */}
      <Contact social={user.social_handles}/>
      {/* Contact Area end */}
      {/* Blog Area start */}
      <Blog blog={user.services}/>
      {/* Blog Area end */}
      {/* Client Log start */}
      <Clients clients={user.services}/>
      {/* Client Log end */}
    </NoxfolioLayout>
     
  );
}
