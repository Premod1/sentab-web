import { SimpleGrid, Box } from "@chakra-ui/react";
import "./Job.css";
function Job() {
  return (
    <div className="job-container">
      <SimpleGrid minChildWidth="120px" spacing="40px" m="40px">
        <Box bg="tomato" height="380px">
          <img src="/hospitalaty.jpg" alt="hospitalaty" />
        </Box>
        <Box bg="tomato" height="380px">
          <img src="/It.jpg" alt="it" />
        </Box>
        <Box bg="tomato" height="380px">
          <img src="work.jpg" alt="work" />
        </Box>
        <Box bg="tomato" height="380px">
          <img src="Bussness.jpg" alt="Bussness" />
        </Box>
      </SimpleGrid>
      <div>
        <h1>Find your perfect match!</h1>
        <p>
          Let Sentab International guide you in finding the perfect foreign
          employment that suits your skill set and your passion. There are many
          fields in which you can find job opportunities abroad. From the
          hospitality industry to the IT sector and everything in between,
          businesses are on the lookout for recruits. Sentab can help you to
          stay ahead of the competition and impart to you the knowledge,
          expertise and experience to make your foreign employment and migration
          dreams come true. So, let’s go hunting for your perfect job and career
          path!
        </p>
      </div>
    </div>
  );
}
export default Job;
