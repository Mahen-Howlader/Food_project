import Featuredprodut from "../../Component/FeaturedProduct/Featuredprodut";
import Hero from "../../Component/Hero/Hero";
import Benefitbuy from "../../Component/Benefitbuy/Benefitbuy";
import Homepageslider from "../Homepageslider/Homepageslider";

function Homepageallsection() {
  

  return (
    <div>
      <Hero></Hero>
      <Featuredprodut></Featuredprodut>
      <Homepageslider></Homepageslider>
      <Benefitbuy></Benefitbuy>
    </div>
  );
}

export default Homepageallsection;