import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack style={{ backgroundColor: "white", alignItems: "flex-start" }}>
      <Image src={imageSrc} />
      <VStack style={{ alignItems: "flex-start", padding: 16 }}>
        <Heading style={{ color: "black" }}>{title}</Heading>
        <Text style={{ color: "black" }}>{description}</Text>
        <HStack style={{ marginTop: 8 }}>
          <Text style={{ color: "black" }}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
