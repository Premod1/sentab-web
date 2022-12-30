import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    alert("done");
    setName("");
    setEmail("");
    setPNumber("");
    setAddress("");
  };
  return (
    <div className="contact-form">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="text"
          value={pNumber}
          onChange={(e) => {
            setPNumber(e.target.value);
          }}
        />
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />
        <br />
        <Button colorScheme="blue" type="text" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
}
export default ContactForm;
