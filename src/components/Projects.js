import React from 'react';
/* import image1 from '../../src/img/projects/ecommcer.jpg' */


export default function Projects({resumeData}){
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{"Proyectos"}</h1>
          <div id="cont-p" className="bgrid-quarters s-bgrid-thirds cf cont-projects">
          {
            resumeData.projects && resumeData.projects.map((item, index)=>{
              return(
                <div key={index} className="columns portfolio-item ">
                  <div className="item-wrap projects">
                      <img src={`${item.imgurl}`} className="item-img" alt='...'/>
                      <p>
                        {item.description}
                      </p>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                   
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }