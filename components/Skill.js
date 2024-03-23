import Link from "next/link";

const Skill = ({skills}) => {
  if(!skills) return <p></p> 
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus to voluptatem
                    accusantium doloremque laudantium, totam rem aperiamc eaque
                    ipsa quae ab illo inventore veritatis
                  </p>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {skills.sort((a,b)=> a.sequence - b.sequence).slice(0,8).map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image.url} alt="Skill" className="h-2" />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
export default Skill;

export const Skill2 = ({skills}) => {
  if(!skills) return <p></p>
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {skills.sort((a,b)=>a.sequence - b.sequence).slice(0,6).map(
                  (item) =>
                   { return (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image.url} alt="Skill" />
                            <span className="percent">{item.percentage}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                   })}
              </div>
            </div>
          </div>
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
