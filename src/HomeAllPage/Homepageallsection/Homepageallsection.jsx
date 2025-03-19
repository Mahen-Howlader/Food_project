import Slider from "react-slick";
import Featuredprodut from "../../Component/FeaturedProduct/Featuredprodut";
import Hero from "../../Component/Hero/Hero";
import useFoodData from "../../Hook/Alldata";
import { Link } from "react-router";
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