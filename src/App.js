import { Provider, useSelector } from "react-redux";
import store from "./store";
import React, { useState }  from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Projects";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeDataORIGEN from "./resumeData";
import { ChatBotKit } from "./components/chatbot/Chatbot";

import "./App.css"



function App() {
  
  const [lang,setLang] = useState(`es`)

  let resumeData

  const handleLang = (lan)=>{
    
    setLang(lan);
    
  }
  console.log(` Language>.>>>>`, lang)
              switch (lang) {
            case `es`: 
            resumeData = resumeDataORIGEN.resumeData;
            break;
            case `en`: 
            resumeData = resumeDataORIGEN.resumeDataEn;
              break;

            default:
              resumeData = resumeDataORIGEN.resumeData;
              break;
            }
       

  return (
    <div className="App">
      <Provider store={store}>
         <ChatBotKit/>
        <NavBar resumeData={resumeData} handleLang = {handleLang} />         
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Reviews resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </Provider>
    </div>
  );
}

export default App;
