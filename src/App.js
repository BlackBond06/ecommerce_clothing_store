import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import theme from "./chakra/theme";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const LocationProvider = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/About/" element={<About />} />
      <Route path="/Contact/" element={<Contact />} />
    </Routes>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
