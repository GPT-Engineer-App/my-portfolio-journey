import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box padding={8}>
      <Heading as="h1" size="xl" marginBottom={4}>
        About Me
      </Heading>
      <Text fontSize="xl">I'm a passionate software developer with expertise in web development, creating intuitive and engaging user experiences.</Text>
    </Box>
  );
};

export default About;
