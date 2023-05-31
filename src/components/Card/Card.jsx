import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { createApi } from "unsplash-js";

export const api = createApi({
  accessKey: "5SXt8CLKOTFgkpYqj1ObxLmaW4FOAExtxR_I4GPGwKE",
});

const Card = ({ photo }) => {
 
 
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
            color="#a435f0"
            padding="3px 5px"
            zIndex={2}
            fontWeight={500}
            fontSize="12px"
          >
            New Season
          </Text>
          <Image
          src={process.env.REACT_APP_UPLOAD_URL + photo.attributes?.img.data.attributes.url}
            width="100%"
            height="100%"
            objectFit="cover"
            position="relative"
          />
        </Box>
        <Heading fontSize="1em">{photo?.attributes?.title}</Heading>
        <Flex gap={4}>
          <Text color="gray" textDecoration="line-through">
            $124
          </Text>
          <Text fontWeight={700}>{photo?.attributes?.price}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Card;
