import React from "react";
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import ProjectSlider from "../components/ProjectSlider";

 function Home () { 
    return (
    <div>
        <Header />
        <About />
        <Skills />
        <ProjectSlider />
        <ContactForm />
        <Footer />
    </div> 
)
}

export default Home;