import React from 'react';

export default function NavBar({resumeData, handleLang}) {
   // let lenguaje
//   handleLang = (lenguaje, e)=>{
//       e.preventDefault();
//       console.log(lenguaje)
//       if (e.target.value ==='es'){
//          resumeData = resumeData.resumeData
//       }
//       else if (lenguaje==='en'){
//          resumeData = resumeData.resumeDataEn
//       }
//    }
   console.log('resumeData------------', resumeData.mainTitles.NavBar)

   return (
      <React.Fragment>
         <header id="home">
            <nav style={{ backgroundColor: 'black', opacity: '65%' }} id="nav-wrap">
               
               
               <select onChange={(e)=>handleLang(e.target.value)} defaultValue={"es"}>
                  <option value={`en`}>English</option>
                  <option value={`es`}>Español</option>
               </select>

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#hide-nav" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">{resumeData.mainTitles.NavBar.t1}</a></li>
                  <li><a className="smoothscroll" href="#about">{resumeData.mainTitles.NavBar.t2}</a></li>
                  <li><a className="smoothscroll" href="#resume">{resumeData.mainTitles.NavBar.t3}</a></li>
                  <li><a className="smoothscroll" href="#portfolio">{resumeData.mainTitles.NavBar.t4}</a></li>
                  <li><a className="smoothscroll" href="#testimonials">{resumeData.mainTitles.NavBar.t5}</a></li>
                  <li><a className="smoothscroll" href="#contact">{resumeData.mainTitles.NavBar.t6}</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 /* style={{backgroundColor:'black', opacity: '75%', }} */ className={`responsive-headline `}>{resumeData.name}</h1>
                  <h3 style={{ textAlign:'center', backgroundColor: 'black', opacity: '65%', color: '#fff', fontFamily: 'sans-serif ' }} > {resumeData.role}  {resumeData.roleDescription}
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