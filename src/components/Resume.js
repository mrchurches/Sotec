import React from 'react';
import style from '../style/resume.module.css'


export default function Resume({ resumeData }) {
   return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>{"¿Nosotros?"}</span></h1>
            </div>

            <div className="nine columns main-col">

               <div className="row item">
                  <div className="twelve columns">
                     <h3>{"¿Quieres llegar a un mayor número de personas y hacer que tu empresa crezca al siguiente nivel?"}</h3>
                     <br />
                     <p style={{ color: 'black' }} /* className="info" */>
                        {"Tu negocio necesita una página web que sorprenda a tus visitantes y haga que no duden en comprar tus productos o servicios para que así puedas aumentar tus ingresos y tu cartera de clientes."}
                     </p>

                  </div>
               </div>
            </div>
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Profesional</span></h1>
            </div>

            <div className="nine columns main-col">
               {
                  resumeData.work && resumeData.work.map((item, index) => {
                     return (
                        <div key={index} className={"row item"}>
                           <div className={style.container}>
                              <h3>{item.title}  </h3>
                              <img src={item.img} alt="..." />
                              <p /* className="info" */>
                                 {item.description}
                              </p>
                           </div>

                        </div>

                     )
                  })
               }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>PRESENTACION</span></h1>
            </div>


            <div style={{position: "relative", overflow: "hidden", paddingTop: "42.25%"}}>

               <iframe src="https://share.synthesia.io/embeds/videos/a859c616-c5a4-47ae-8bd9-241e1560d86d" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" style={{position: "absolute", width: "90%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0", overflow:"hidden"}}>
               </iframe>

            </div>
        

         </div>

      </section>
   );
}