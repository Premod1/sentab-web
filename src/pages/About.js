import "./About.css";
import { Button, Grid, GridItem } from "@chakra-ui/react";
function About() {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/premod-suraweera-968916216/");
  };
  return (
    <div className="about-container">
      <h1>Get to know us!</h1>
      <br />
      <br />
      <br />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} bg="papayawhip" mr="-20px">
          <img src="/Know.jpg" alt="know" />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <h1>Get to know us!</h1>
          <br />
          <p>
            We are Sentab International. At Sentab, our expertise lies in
            providing consultation services to Sri Lankan people, to help them
            achieve their foreign employment dream. We help skilled workers of
            our country to gain job opportunities from European to Middle
            Eastern countries. We are dedicated to providing our clients with
            the best opportunities and helping them with their foreign
            employment and migration needs. Sentab also provides world class
            welding courses for Sri Lankan's to become skilled in the art of
            welding. We believe in and prepare our clients to achieve their
            goals with professionalism and precision.
          </p>

          <Button colorScheme="linkedin" onClick={handleClick}>
            linkedin
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
}
export default About;
