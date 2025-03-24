import Featuredprodut from "../../Component/FeaturedProduct/Featuredprodut";
import Hero from "../../Component/Hero/Hero";
import Benefitbuy from "../../Component/Benefitbuy/Benefitbuy";
import Homepageslider from "../Homepageslider/Homepageslider";
import Homepagehero from "../../Homepagehero/Homepagehero";

function Homepageallsection() {
  

  return (
    <div>
      <Hero></Hero>
      <Featuredprodut></Featuredprodut>
      <Homepageslider></Homepageslider>
      <Benefitbuy></Benefitbuy>
      <Homepagehero></Homepagehero>
    </div>
  );
}

export default Homepageallsection;