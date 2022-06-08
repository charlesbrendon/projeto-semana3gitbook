import "./Home.css";
import PaletaList from "../../components/PaletaList/PaletaList";
import Navbar from "components/Navbar/navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaList />
      </div>
    </div>
  );
};

export default Home;
