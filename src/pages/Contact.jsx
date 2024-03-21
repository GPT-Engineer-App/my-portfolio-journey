import React from "react";
import { Box, Heading, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box padding={8}>
      <Heading as="h1" size="xl" marginBottom={8}>
        Get in Touch
      </Heading>
      <HStack spacing={4}>
        <Link href="https://github.com/yourusername" isExternal>
          <Icon as={FaGithub} boxSize={8} />
        </Link>
        <Link href="https://linkedin.com/in/yourusername" isExternal>
          <Icon as={FaLinkedin} boxSize={8} />
        </Link>
        <Link href="mailto:youremail@example.com">
          <Icon as={FaEnvelope} boxSize={8} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Contact;
