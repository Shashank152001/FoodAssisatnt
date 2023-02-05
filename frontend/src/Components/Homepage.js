import About from "./About";

// import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";
import IncreaseSale from "./IncreaseSale";
import Services from "./Services";
import Testimonial from "./Testimonial";

function Homepage() {
    return (
        <>
            <section>
                <Hero />
                <IncreaseSale />
                <About/>
                <Services/>
                <Testimonial/>
                <Footer/>
                
            </section>
        </>
    );
}

export default Homepage;