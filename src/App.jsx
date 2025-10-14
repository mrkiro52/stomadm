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
import Service from "./pages/Service/Service";
import Contacts from "./pages/Contacts/Contacts";
import Doctors from "./pages/Doctors/Doctors";
import Reviews from "./pages/Reviews/Reviews";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
