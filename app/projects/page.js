'use client'
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);
 const metadata = {
  title: "Projects Grid",
};
const ProjectsPage = () => {
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
   if(user===null || user===undefined){return <p>Loading...</p>}
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Project Grid View"} />
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotop projects={user.projects}/>
          <div className="project-btn text-center wow fadeInUp delay-0-2s">
            <Link legacyBehavior href="/projects">
              <a className="theme-btn">
                View More Projects <i className="far fa-angle-right" />
              </a>
            </Link>
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
    </NoxfolioLayout>
  );
};
export default ProjectsPage;
