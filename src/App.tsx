import "./App.css";
import Banner from "./components/banner/Banner";
import NextStage from "./components/footer/NextStage";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/navbar/Navbar";
import Proposal from "./components/proposal/Proposal";
import ServicesCardContainer from "./containers/services/ServicesCardContainer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServicesCardContainer />
      <Gallery />
      <Proposal />
      <NextStage />
    </>
  );
}

export default App;
