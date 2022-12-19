import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </Provider>
    </div>
  );
}

export default App;
