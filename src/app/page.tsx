import Call from "./pages/Callforsponers";
import FAQPage from "./pages/FAQ";
import Footer from "./pages/Footer";
import HomePage from "./pages/Home";
import Navbar from "./pages/Navbar";
import SponsorsPage from "./pages/Sponsers";
import AboutPage from "./pages/aboutUs";
import PrizePool from "./pages/prizePool";
import ProblemStatements from "./pages/problemStatement";
// import Schedule from "./pages/schedule";
import Timeline from "./pages/timeline";



export default function Home() {
  return (
    <>
    
    <Navbar/>
    <div id="home">
    <HomePage/>
    </div>
    <div id="about">
    <AboutPage/>
    </div>
    <div id="prize">
    <PrizePool/>
    </div>
    {/* <div id="schedule">
    <Schedule/>
    </div> */}
    <div id="timeline">
    <Timeline/>
    </div>
    <div id="problem">
    <ProblemStatements/>
    </div>
    <div id="sponser">
    <SponsorsPage/>
    </div>
    <div id="call">
    <Call/>
    </div>
    <div id="faq">
    <FAQPage/>
    </div>
    <Footer/>
    </>
  );
}
