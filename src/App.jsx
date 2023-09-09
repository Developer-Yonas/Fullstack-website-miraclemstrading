import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
    <Route>
      
        <Route index element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Service" element={<Service />} />
        <Route path="Experience" element={<Experience />} />
      </Route>
     
    </Routes>
    <Footer/>
  </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
