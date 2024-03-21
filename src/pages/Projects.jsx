import React from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box padding={8}>
      <Heading as="h1" size="xl" marginBottom={8}>
        Projects
      </Heading>
      <VStack spacing={8} align="stretch">
        {}
        <Box>
          <Heading as="h2" size="lg" marginBottom={2}>
            Project 1
          </Heading>
          <Text>Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        {}
        <Box>
          <Heading as="h2" size="lg" marginBottom={2}>
            Project 2
          </Heading>
          <Text>Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        {}
      </VStack>
    </Box>
  );
};

export default Projects;
