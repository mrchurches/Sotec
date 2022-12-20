import React from 'react';

export default function NavBar({resumeData}) {

   return (
      <React.Fragment>
         <header id="home">
            <nav style={{ backgroundColor: 'black', opacity: '65%' }} id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#hide-nav" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">{"Home"}</a></li>
                  <li><a className="smoothscroll" href="#about">{"sobre nosotros"}</a></li>
                  <li><a className="smoothscroll" href="#resume">{"Resume"}</a></li>
                  <li><a className="smoothscroll" href="#portfolio">{"Proyectos"}</a></li>
                  <li><a className="smoothscroll" href="#testimonials">{"Testimonios"}</a></li>
                  <li><a className="smoothscroll" href="#contact">{"Contacto"}</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 /* style={{backgroundColor:'black', opacity: '75%', }} */ className="responsive-headline">{resumeData.name}</h1>
                  <h3 style={{ backgroundColor: 'black', opacity: '65%', color: '#fff', fontFamily: 'sans-serif ' }}> {resumeData.role}  {resumeData.roleDescription}
                  </h3>
                  <hr />
                  <ul className="social">
                     {
                        resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                           return (
                              <li key={item.name}>
                                 {/* <a href={item.url} target="_blank"><i className={item.className}></i></a> */}
                              </li>
                              // AQUI VAN LAS REDES SOCIALES
                           )
                        }
                        )
                     }
                  </ul>
               </div>
            </div>

            <p /* className="scrolldown" */>
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      </React.Fragment>
   );
}