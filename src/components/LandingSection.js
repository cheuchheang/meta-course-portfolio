import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="Pete" src="https://i.pravatar.cc/150?img=7" size="2xl" />
      <Heading as="h6" size="xs">Hello! I'm Pete</Heading>
      <Heading as="h2" size="2xl">
        A frontend developer specialised in React
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
