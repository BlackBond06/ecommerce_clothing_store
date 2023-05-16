import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { createApi } from "unsplash-js";

export const api = createApi({
  accessKey: "5SXt8CLKOTFgkpYqj1ObxLmaW4FOAExtxR_I4GPGwKE",
});

const Card = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <Link to={`/product/${photo.id}`}>
      <Flex width={{ base: "auto", md: "250px", lg:"280px" }} direction="column" >

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
            color="teal"
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
        <Heading fontSize="1em">{user.name}</Heading>
        <Flex gap={4}>
          <Text color="gray" textDecoration="line-through">
            $124
          </Text>
          <Text fontWeight={700}>$75</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Card;
