import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Company from "./components/company/Company";
import Residencies from "./components/residencies/Residencies";
 import Value from "./components/Value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        </div>
        <Hero />
     
      <Company/> 
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
      
    </div>
  );
}

export default App;
