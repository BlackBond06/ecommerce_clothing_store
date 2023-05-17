import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PostLoader from "../../components/PostLoader/PostLoader";
import { api } from "../../components/Card/Card";

const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Product = () => {
  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const fetchImageFromApi = async () => {
    try {
      setLoading(true);
      const response = await api.search.getPhotos({
        query: "jacket",
        perPage: 2,
        orientation: "landscape",
      });
      setPhotosResponse(response);
    } catch (error) {
      console.log("fetchImageFromApi error: ", error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchImageFromApi();
  }, []);

  console.log(data);
  if (data === null) {
    return <PostLoader />;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    const images = data.response.results.map((photo, idx) => photo);

    return (
      <motion.div variants={routerVariants} initial="initial" animate="final">
        <Flex padding="20px 50px" gap="50px" direction={{base:"column", md:"column", lg:"unset"}}>
          <Flex flex={1} gap="50px" >
            <Box flex={1} display={{base:"none", md:"unset", lg:"unset"}}>
              <Image
                src={images[0].urls.regular}
                onClick={(e) => setSelectedImg(0)}
                width="100%"
                height="150px"
                objectFit="cover"
                cursor="pointer"
                marginBottom="20px"
              />
              <Image
                src={images[1].urls.regular}
                onClick={(e) => setSelectedImg(1)}
                width="100%"
                height="150px"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
            <Box flex={5}>
              <Image
                src={images[selectedImg].urls.regular}
                width="100%"
                maxHeight="800px"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
          </Flex>
          <Flex flex={1} direction="column">
            <Heading fontSize="14px">Title</Heading>
            <Text>$299</Text>
            <Text>
              Our jacket is made from high-quality materials, providing both
              comfort and style. It features a sleek design with a versatile
              color scheme, making it easy to pair with any outfit. The jacket
              is equipped with multiple pockets for storing your essentials
              while on the go.
            </Text>
            <Flex align="center">
              <Button onClick={()=> setQuantity(prev => prev <= 0 ? 0: prev - 1)}>-</Button>
              {quantity}
              <Button onClick={()=> setQuantity(prev => prev + 1)}>+</Button>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    );
  }
};

export default Product;
