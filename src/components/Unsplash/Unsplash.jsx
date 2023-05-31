import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Unsplash = ({ photo }) => {
  const { urls } = photo;
  return (
    <Link to={`/product/${photo.id}`}>
      <Flex
        width={{ base: "auto", md: "250px", lg: "280px" }}
        direction="column"
      >
        <Box
          width="100%"
          height={{ base: "auto", md: "400px" }}
          overflow="hidden"
          position="relative"
          _hover={{ filter: "grayscale(80%)" }}
        >
          <Text
            position="absolute"
            top="5px"
            left="5px"
            backgroundColor="white"
            color="#a435f0"
            padding="3px 5px"
            zIndex={2}
            fontWeight={500}
            fontSize="12px"
          >
            New Season
          </Text>
          <Image
            src={urls.regular}
            width="100%"
            height="100%"
            objectFit="cover"
            position="relative"
          />
        </Box>
        <Heading fontSize="1em">{photo.user.name}</Heading>
        <Flex gap={4}>
          <Text color="gray" textDecoration="line-through">
            $124
          </Text>
          <Text fontWeight={700}>100</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Unsplash;
