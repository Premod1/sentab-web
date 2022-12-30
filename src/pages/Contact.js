import {
  Grid,
  GridItem,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pNumber, setPNumber] = useState("");

  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (Name.length === 0 || email.length === 0 || pNumber === 0) {
      setError(true);
    } else {
      alert("done");
      setName("");
      setEmail("");
      setMessage("");
      setPNumber("");
      setError("");
    }
  };
  return (
    <div className="contact-container">
      <img src="/meetin.jpg" alt="meetin" />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} bg="papayawhip" mr="-20px">
          <FormControl p="50px">
            <Input
              type="text"
              name="name"
              fontSize="18px"
              color="GrayText"
              variant="flushed"
              placeholder=" Name"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            {error && Name.length <= 0 ? (
              <label style={{ color: "red" }}>Name Cant be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />

            <Input
              type="email"
              name="email"
              fontSize="18px"
              color="GrayText"
              placeholder="Email Address"
              variant="flushed"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {error && email.length <= 0 ? (
              <label style={{ color: "red" }}>Email Cant be empty</label>
            ) : (
              ""
            )}
            <br />
            <br />

            <Textarea
              placeholder="Message"
              value={message}
              fontSize="18px"
              color="GrayText"
            />

            <br />
            <br />

            <Input
              type="text"
              variant="flushed"
              fontSize="18px"
              color="GrayText"
              placeholder="Phone Number"
              value={pNumber}
              onChange={(e) => {
                setPNumber(e.target.value);
              }}
            />
            {error && pNumber.length <= 0 ? (
              <label style={{ color: "red" }}>
                Mobile Number Cant be empty
              </label>
            ) : (
              ""
            )}
            <br />
            <br />
            <Button
              colorScheme="blue"
              width="120px"
              m="20px"
              onClick={handleClick}
            >
              Submit
            </Button>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <h1>Connect with us!</h1>
          <hr />
          <br />
          <h3>Change your life with Sentab!</h3>
          <br />
          <h5>
            Mail your CV to{" "}
            <b>
              <a href="cv@sentab.lk">cv@sentab.lk</a>
            </b>{" "}
            and start your path towards achieving your dream!
            <br />
            <br />
            Have a chat with us - 0112 708 290
          </h5>
        </GridItem>
      </Grid>
    </div>
  );
}
export default Contact;
