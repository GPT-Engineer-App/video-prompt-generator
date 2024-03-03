import React, { useState } from "react";
import { Box, CloseButton, Text } from "@chakra-ui/react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <Box bg="teal.500" color="white" px={4} py={2} position="relative" mb={6}>
      <Text fontWeight="bold">🐱 New! Video generation for cats - try it now!</Text>
      <CloseButton position="absolute" right="8px" top="8px" onClick={() => setIsVisible(false)} />
    </Box>
  );
};

export default Banner;
