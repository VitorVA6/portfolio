import Home from "../components/Home";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import notifies from "../utils/notify";

export default function Main() {
  return (
    <div className="bg-gray-900">
        <notifies.Container />
        <Header />
        <Home />
        <About />
        <Services />
        <Works />
        <Contact />
        <Footer />
    </div>
  )
}
