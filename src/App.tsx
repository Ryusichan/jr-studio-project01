import "./App.css";
import "./res/css/bootstrap.css";
import "./res/css/fontawesome-all.css";
import "./res/css/magnific-popup.css";
import "./res/css/styles.css";
import "./res/css/swiper.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SmallFeature from "./components/SmallFeature";
import Description from "./components/Description";
import DetailLightBox from "./components/DetailLightBox";
import Description02 from "./components/Description02";
import Feature from "./components/Feature";
import ScreenShot from "./components/ScreenShot";
import Testimonials from "./components/Testimonials";
import Statistics from "./components/Statistics";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
// import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="App">
      {/* <Preloader /> */}

      <Navigation />

      <Header />

      <SmallFeature />

      <Description />

      <DetailLightBox />

      <Description02 />

      <Feature />

      <ScreenShot />

      <Testimonials />

      <Statistics />

      <Download />

      <Footer />

      {/* Copyright */}
      <Copyright />
    </div>
  );
}

export default App;
