import SearchMenu from "@/components/Search/SearchMenu";
import WelcomeLine from "@/components/WelcomeLine/WelcomeLine";
import { Navigation } from "./components/NavigationMenu/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/FooterSection/Footer";
import { AccordionDemo } from "./components/AccordionFooter/Accordion";
import SubFooter from "./components/SubFooter/SubFooter";


export default function App() {
  return (
    
    <div>
        <WelcomeLine/>
        <h1 className='text-center mb-5 text-2font-bold text-red-400 mt-5'>copyright &copy; Gloam Yeasin</h1>
              <SearchMenu/>
              <div className="text-right sm:mt-14 mt-10">
                <Navigation/>
                <Outlet/>
              </div>
              <Footer/>
              <AccordionDemo/>
              <SubFooter/>
         </div>
  )
}
