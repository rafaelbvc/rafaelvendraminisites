import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import ServicesCardContainer from "./containers/services/ServicesCardContainer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServicesCardContainer />
    </>
  );
}

export default App;
