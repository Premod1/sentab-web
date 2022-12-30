import { Box, Flex, Link } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <Box style={{ position: "fixed", width: "100%" }} bg="white" p={1}>
      <Flex px="80px" mx="auto" alignItems="center">
        <Box>
          <img src="Sentab Logo (002)-0.jpg" alt="" width="70px" />
        </Box>
        <Box mx="auto">
          {/* Your links go here */}
          <Link href="#home" mr={6}>
            Home
          </Link>
          <Link href="#about" mr={6}>
            About
          </Link>
          <Link href="#Job" mr={6}>
            Job
          </Link>
          <Link href="#contact" mr={6}>
            Contact
          </Link>
        </Box>
        <Box style={{ display: "flex" }}>
          {/* Your social links go here */}

          <Link mr={6}>
            <FaFacebook size={32} color="#3b5998" />
          </Link>
          <Link mr={6}>
            <FaInstagram size={32} color="#e4405f" />
          </Link>
          <Link mr={6}>
            <FaWhatsapp size={32} color="#25D366" />
          </Link>
          <Link mr={6}>
            <FaLinkedin size={32} color="#0077B5" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
