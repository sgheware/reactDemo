import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "XYZ store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />      
    </>
  );
};

export default Home;
