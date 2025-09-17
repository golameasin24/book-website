import { SMPicture } from "@/components/SmPicture/SMPicture";

import SearchMenu from "@/components/Search/SearchMenu";

import { Navigation } from "@/components/NavigationMenu/Navigation";

import { LgPicture } from "@/components/HeroSectoin/LgPicture";



import HSC from "@/components/HSCBOOk/Hsc";
import WelcomeLine from "@/components/WelcomeLine/WelcomeLine";
import Footer from "@/components/FooterSection/Footer";
import { Publication } from "@/components/Publications/Publication";
import Dwonload from "@/components/DownloadSite/Dwonload";
import { AccordionDemo } from "@/components/AccordionFooter/Accordion";
import SubFooter from "@/components/SubFooter/SubFooter";
import Cokolet from "@/components/Cokolet/Cokolet";
export default function App() {
  return (
    
    <div>
          <WelcomeLine/>
      <div className=" flex sm:justify-between md:flex-col">
          <SearchMenu/>
          <div className="text-right sm:mt-14 mt-10">
            <Navigation />
          </div>
      </div>
      <LgPicture/>
        <SMPicture/>
              <Cokolet/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>
          <HSC/>

          <Publication/>
          <Dwonload/>
         
         
              <Footer/>
              <AccordionDemo/>
              <SubFooter/>
    </div>
  )
}
