import React from 'react';
/* import image1 from '../../src/img/projects/ecommcer.jpg' */

export default function Projects({resumeData}){
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{"Proyectos en progreso"}</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                <div key={index} className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img" alt='...'/>
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