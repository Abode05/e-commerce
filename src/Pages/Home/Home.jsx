import AboutUs from "../../components/home/AboutUs"
import AppSection from "../../components/home/AppSection"
import Banner from "../../components/home/Banner"
import BrandList from "../../components/home/BrandList"
import CategoryShowCase from "../../components/home/CategoryShowCase"
import HomeCategory from "../../components/home/HomeCategory"
import Register from "../../components/home/Register"

const Home = () => {
  return (
    <div className=" bg-gradient-to-t  from-[#BB9B97]   ">
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <AboutUs />
      <AppSection />
      <BrandList   />
    </div>
  )
}

export default Home