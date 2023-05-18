import React, { useState, useEffect } from "react";
import { api } from "../../components/Card/Card";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const [data, setPhotosResponse] = useState(null);

  const fetchImageFromApi = async () => {
    try {
      const response = await api.search.getPhotos({
        query: "jacket",
        perPage: 2,
        orientation: "landscape",
      });
      setPhotosResponse(response);
    } catch (error) {
      console.log("fetchImageFromApi error: ", error.message);
    }
  };

  useEffect(() => {
    fetchImageFromApi();
  }, []);

  if (data === null) {
    return <Box>Loading...</Box>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    const images = data.response.results.map((photo) => photo);

    return (
      <Stack
        position="absolute"
        top="80px"
        right="0"
        zIndex={5}
        backgroundColor="gray.100"
        padding="20px"
        boxShadow="0.8rem 0.8rem 1.4rem #c8d0e7,
          -0.2rem -0.2rem 1.8rem #c8d0e7"
      >
        <Heading fontSize={18} color="gray.500">
          Products in your cart
        </Heading>
        <Flex alignItems="center" gap={4}>
          <Image
            src={images[0].urls.regular}
            width="80px"
            height="100px"
            objectFit="cover"
          />
          <Box>
            <Heading fontSize={18} marginBottom="10px" color="gray.500">
              Denim Jacket
            </Heading>
            <Text
              textOverflow="ellipsis"
              color="gray.400"
              marginBottom={2}
              fontSize="14px"
            >
              high-quality materials.
            </Text>
            <Text color="#2879fe">$299</Text>
          </Box>
          <Icon
            as={RiDeleteBin5Line}
            color="red"
            fontSize="20px"
            cursor="pointer"
          />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>SUBTOTAL</Text>
          <Text>$423</Text>
        </Flex>
        <Button
          width="250px"
          padding="10px"
          backgroundColor="#2879fe"
          color="white"
          border="none"
        >
          PROCEED TO CHECKOUT
        </Button>
        <Text color="red" fontSize="12px" cursor="pointer">Reset Cart</Text>
      </Stack>
    );
  }
};

export default Cart;
