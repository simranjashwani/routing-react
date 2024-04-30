import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import { Routes, Route } from "react-router-dom";
import ContactNo from "../Components/ContactNo";

const Routecomponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="/contact/:id" element={<ContactNo />} />
      </Route>
    </Routes>
  );
};

export default Routecomponent;
