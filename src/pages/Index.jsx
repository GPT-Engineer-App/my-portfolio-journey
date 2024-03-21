import React from "react";
import { Box, Heading, Text, Image, Flex, Link, Icon, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" padding={4} bg="gray.100">
        <Heading as="h1" size="xl">
          Your Name
        </Heading>
        <HStack spacing={4}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex id="about" direction={["column", "row"]} align="center" justify="center" padding={8}>
        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTEwMDQ5OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Your Name" borderRadius="full" boxSize={["150px", "200px"]} marginRight={[0, 8]} marginBottom={[4, 0]} />
        <Box>
          <Heading as="h2" size="xl" marginBottom={4}>
            Hi, I'm Your Name
          </Heading>
          <Text fontSize="xl">I'm a passionate software developer with expertise in web development, creating intuitive and engaging user experiences.</Text>
        </Box>
      </Flex>

      {/* Projects Section */}
      <Box id="projects" padding={8}>
        <Heading as="h2" size="xl" marginBottom={8}>
          Projects
        </Heading>
        <VStack spacing={8} align="stretch">
          {/* Project 1 */}
          <Box>
            <Heading as="h3" size="lg" marginBottom={2}>
              Project 1
            </Heading>
            <Text>Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          {/* Project 2 */}
          <Box>
            <Heading as="h3" size="lg" marginBottom={2}>
              Project 2
            </Heading>
            <Text>Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          {/* Add more projects as needed */}
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box id="contact" padding={8} bg="gray.100">
        <Heading as="h2" size="xl" marginBottom={8}>
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

      {/* Footer */}
      <Flex as="footer" justify="center" padding={4} bg="gray.200">
        <Text>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
