// import React from "react";
import Home from "./Home";
import Services from "./Services";
import Pricing from "./Pricing";
import AboutUs from "./About-Us";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import OurMission from "./components/OurMission";
import Benifits from "./components/Benifits";
import Pricings from "./components/PricingCard";
import "./assets/css/style.css";
import { ThemeProvider } from "styled-components";
 const App = ()  =>{
  const theme = {
    colors:{
        theme_text_color:"#000",
        theme_heading_color:"red,"
    },
    media:{mobile:"767px", tab:"1024px"},
  };
  return (
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Header />
  <Banner/>
  <OurMission/>
  <Benifits/>
  <Pricings/>
  <Routes>
    <Route path="/Home" element={ <Home />}></Route>
    <Route path="/Services" element={ <Services />}></Route>
    <Route path="/Pricing" element={ <Pricing />}></Route>
    <Route path="/About-Us" element={ <AboutUs />}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </ThemeProvider>
  )
 }

 export default App;