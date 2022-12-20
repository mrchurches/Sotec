import React from 'react';
import aboutUs from '../img/banners/sotec.png'

export default function About({ resumeData }) {

   return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img style={{borderRadius: '10px', width:'200px', marginTop:"8px"}} src={aboutUs} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>{"Sobre Nosotros"}</h2>
               <p>
                  {
                     resumeData.aboutme
                  }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>{"Detalle de contacto"}</h2>
                     <p className="address">
                        <span>{resumeData.name}</span>
                        <br></br>
                        <span>
                           {resumeData.address}
                        </span>
                        <br></br>
                        <span>{resumeData.email}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}