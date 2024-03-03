import React, { useState } from "react";
import Banner from "../components/Banner";
import { Box, Button, Container, Input, VStack, Heading, Text, AspectRatio, IconButton, useToast } from "@chakra-ui/react";
import { FaYoutube, FaDownload, FaPlay } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const toast = useToast();

  const handlePromptSubmit = () => {
    // Placeholder for video generation logic
    const generatedVideoUrl = "GPTENG:get_video_url_based_on_prompt";
    setVideoUrl(generatedVideoUrl);
    toast({
      title: "Video generated successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const exportToYouTube = () => {
    // Placeholder for YouTube export logic
    toast({
      title: "Exported to YouTube!",
      description: "Your video has been exported to YouTube",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const downloadVideo = () => {
    // Placeholder for download logic
    window.open(videoUrl, "_blank");
    toast({
      title: "Download started!",
      description: "Your video is being downloaded",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Banner />
        <Heading as="h1" size="2xl">
          Video Generation Platform
        </Heading>
        <Text fontSize="lg">Enter a prompt to generate a custom video, then export it to YouTube or download it directly.</Text>
        <Input placeholder="Enter your prompt here..." value={prompt} onChange={(e) => setPrompt(e.target.value)} size="lg" />
        <Button leftIcon={<FaPlay />} colorScheme="blue" onClick={handlePromptSubmit} isDisabled={!prompt}>
          Generate Video
        </Button>
        {videoUrl && (
          <AspectRatio ratio={16 / 9} w="full">
            <iframe title="Generated Video" src={videoUrl} allowFullScreen />
          </AspectRatio>
        )}
        <Box>
          <IconButton icon={<FaYoutube />} colorScheme="red" aria-label="Export to YouTube" onClick={exportToYouTube} isDisabled={!videoUrl} m={2} />
          <IconButton icon={<FaDownload />} colorScheme="green" aria-label="Download Video" onClick={downloadVideo} isDisabled={!videoUrl} m={2} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
