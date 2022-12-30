import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Job from "./pages/Job";
import News from "./pages/News";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
