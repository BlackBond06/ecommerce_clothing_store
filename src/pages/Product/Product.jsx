import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Divider, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import PostLoader from "../../components/PostLoader/PostLoader";
import { api } from "../../components/Card/Card";
import {MdOutlineAddShoppingCart, MdOutlineBalance} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";

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
  const [quantity, setQuantity] = useState(1);

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
          <Flex flex={1} direction="column" gap="30px">
            <Heading fontSize="14px">Title</Heading>
            <Text fontSize="30px"
            color="#2879fe"
            fontWeight={500}
            >$299</Text>
            <Text fontSize="18px" fontWeight={300}
            textAlign="justify"
            >
              Our jacket is made from high-quality materials, providing both
              comfort and style. It features a sleek design with a versatile
              color scheme, making it easy to pair with any outfit. The jacket
              is equipped with multiple pockets for storing your essentials
              while on the go.
            </Text>
            <Flex align="center" gap={2}>
              <Button onClick={()=> setQuantity(prev => prev === 1 ? 1: prev - 1)}
              width="50px"
              height="50px"
              border="none"
              >-</Button>
              {quantity}
              <Button onClick={()=> setQuantity(prev => prev + 1)}
              width="50px"
              height="50px"
              border="none"
              >+</Button>
            </Flex>
            <Button width="250px" padding="10px" backgroundColor="#2879fe" color="white"
            border="none"
            >
              <Icon as={MdOutlineAddShoppingCart} marginRight={2} fontWeight={500}/>
              ADD TO CART
            </Button>

            <Flex gap={3}>
              <Flex alignItems="center" gap={1} color="#2879fe" fontSize="14px">
              <Icon as={AiOutlineHeart}/>
              ADD TO WISHLIST
              </Flex>
              <Flex  alignItems="center" gap={1} color="#2879fe" fontSize="14px">
              <Icon as={MdOutlineBalance}/>
              ADD TO COMPARE
              </Flex>
            </Flex>
            <Stack color="gray.500" fontSize={14}>
              <Text>Vendor: Denim Jacket</Text>
              <Text>Product Type: Jacket</Text>
              <Text>Tag: Jacket, Uni-Sex, Top</Text>
              <Divider/>
              <Flex direction="column" gap={2}>
                <Text>DESCRIPTION</Text>
                <Divider/>
                <Text>ADDITIONAL INFORMATION</Text>
                <Divider/>
                <Text>FAQ</Text>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </motion.div>
    );
  }
};

export default Product;
