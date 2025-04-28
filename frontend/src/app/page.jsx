import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";

export function generateMetadata(){
  return{
      title:"Home | Azalia Online Shop",
      description:"brows amazing digital products",
      openGraph:{
          title:"Home | Azalia Online Shop",
          description:"brows amazing digital products"
      }

  }
}

export default function Home() {
  return (
    <>
    <HeroSection/>
    <LatestProducts/>
    
    </>
  );
}
