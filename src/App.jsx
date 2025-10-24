// import "./App.scss";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Service from "./pages/Service/Service";
// import Contacts from "./pages/Contacts/Contacts";
// import Doctors from "./pages/Doctors/Doctors";
// import Reviews from "./pages/Reviews/Reviews";
// import Gallery from "./pages/Gallery/Gallery";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route path="/gallery" element={<Gallery />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./App.scss";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Doctors from "./pages/Doctors/Doctors";
import Reviews from "./pages/Reviews/Reviews";
import Gallery from "./pages/Gallery/Gallery";
import NotFound from "./pages/NotFound/NotFound";

import ServiceFilling from "./pages/ServiceFilling/ServiceFilling";
import ServiceTeethCleaning from "./pages/ServiceTeethCleaning/ServiceTeethCleaning";
import ServiceTeethWhitening from "./pages/ServiceTeethWhitening/ServiceTeethWhitening";
import ServiceEmaxVeneers from "./pages/ServiceEmaxVeneers/ServiceEmaxVeneers";
import ServiceEmaxCrown from "./pages/ServiceEmaxCrown/ServiceEmaxCrown";
import ServiceGingivoplasty from "./pages/ServiceGingivoplasty/ServiceGingivoplasty";
import ServiceBotox from "./pages/ServiceBotox/ServiceBotox";

import ServiceZirconiaCrownOnTooth from "./pages/ServiceZirconiaCrownOnTooth/ServiceZirconiaCrownOnTooth";
import ServiceZirconiaCrownOnImplant from "./pages/ServiceZirconiaCrownOnImplant/ServiceZirconiaCrownOnImplant";
import ServiceBoneGrafting from "./pages/ServiceBoneGrafting/ServiceBoneGrafting";
import ServiceSinusLifting from "./pages/ServiceSinusLifting/ServiceSinusLifting";
import ServicePiezolifting from "./pages/ServicePiezolifting/ServicePiezolifting";

import ServiceRootCanalTreatment from "./pages/ServiceRootCanalTreatment/ServiceRootCanalTreatment";
import ServiceToothExtraction from "./pages/ServiceToothExtraction/ServiceToothExtraction";
import ServiceWisdomToothExtraction from "./pages/ServiceWisdomToothExtraction/ServiceWisdomToothExtraction";
import ServiceCystectomy from "./pages/ServiceCystectomy/ServiceCystectomy";
import ServiceApicoectomy from "./pages/ServiceApicoectomy/ServiceApicoectomy";
import ServiceFlapSurgery from "./pages/ServiceFlapSurgery/ServiceFlapSurgery";
import ServiceCurottage from "./pages/ServiceCurottage/ServiceCurottage";

import ServiceBraces from "./pages/ServiceBraces/ServiceBraces";
import ServiceAligners from "./pages/ServiceAligners/ServiceAligners";
import ServiceNightGuard from "./pages/ServiceNightGuard/ServiceNightGuard";
import Services from "./pages/Services/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />

          <Route path="/service/filling" element={<ServiceFilling />} />
          <Route path="/service/teeth-cleaning" element={<ServiceTeethCleaning />} />
          <Route path="/service/teeth-whitening" element={<ServiceTeethWhitening />} />
          <Route path="/service/e-max-veneers" element={<ServiceEmaxVeneers />} />
          <Route path="/service/e-max-crown" element={<ServiceEmaxCrown />} />
          <Route path="/service/gingivoplasty" element={<ServiceGingivoplasty />} />
          <Route path="/service/botox" element={<ServiceBotox />} />

          <Route path="/service/zirconia-crown-on-tooth" element={<ServiceZirconiaCrownOnTooth />} />
          <Route path="/service/zirconia-crown-on-implant" element={<ServiceZirconiaCrownOnImplant />} />
          <Route path="/service/bone-grafting" element={<ServiceBoneGrafting />} />
          <Route path="/service/sinus-lifting" element={<ServiceSinusLifting />} />
          <Route path="/service/piezolifting" element={<ServicePiezolifting />} />

          <Route path="/service/root-canal-treatment" element={<ServiceRootCanalTreatment />} />
          <Route path="/service/tooth-extraction" element={<ServiceToothExtraction />} />
          <Route path="/service/wisdom-tooth-extraction" element={<ServiceWisdomToothExtraction />} />
          <Route path="/service/cystectomy" element={<ServiceCystectomy />} />
          <Route path="/service/apicoectomy" element={<ServiceApicoectomy />} />
          <Route path="/service/flap-surgery" element={<ServiceFlapSurgery />} />
          <Route path="/service/curottage" element={<ServiceCurottage />} />

          <Route path="/service/braces" element={<ServiceBraces />} />
          <Route path="/service/aligners" element={<ServiceAligners />} />
          <Route path="/service/night-guard" element={<ServiceNightGuard />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
