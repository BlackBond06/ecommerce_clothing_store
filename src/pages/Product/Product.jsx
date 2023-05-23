import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart, MdOutlineBalance } from "react-icons/md";
import { useParams } from "react-router-dom";
import PostLoader from "../../components/PostLoader/PostLoader";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

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
    return (
      <motion.div variants={routerVariants} initial="initial" animate="final">
        <Flex
          padding="20px 50px"
          gap="50px"
          direction={{ base: "column", md: "column", lg: "unset" }}
        >
          <Flex flex={1} gap="50px">
            <Box flex={1} display={{ base: "none", md: "unset", lg: "unset" }}>
              <Image
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                onClick={(e) => setSelectedImg("img")}
                width="100%"
                height="150px"
                objectFit="cover"
                cursor="pointer"
                marginBottom="20px"
              />
              <Image
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                onClick={(e) => setSelectedImg("img2")}
                width="100%"
                height="150px"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
            <Box flex={5}>
              <Image
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                width="100%"
                maxHeight="800px"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
          </Flex>
          <Flex flex={1} direction="column" gap="30px">
            <Heading fontSize="14px">Title</Heading>
            <Text>{data?.attributes.title}</Text>
            <Text fontSize="30px" color="#2879fe" fontWeight={500}>
              ${data?.attributes.price}
            </Text>
            <Text fontSize="18px" fontWeight={300} textAlign="justify">
              {data?.attributes.desc}
            </Text>
            <Flex align="center" gap={2}>
              <Button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
                width="50px"
                height="50px"
                border="none"
              >
                -
              </Button>
              {quantity}
              <Button
                onClick={() => setQuantity((prev) => prev + 1)}
                width="50px"
                height="50px"
                border="none"
              >
                +
              </Button>
            </Flex>
            <Button
              width="250px"
              padding="10px"
              backgroundColor="#2879fe"
              color="white"
              border="none"
              _hover={{ background: "blue.200" }}
              onClick={()=> dispatch(addToCart({
                id:data.id,
                title:data.attributes.title,
                desc:data.attributes.desc,
                price:data.attributes.price,
                img:data.attributes.img.data.attributes.url,
                quantity
              }))}
            >
              <Icon
                as={MdOutlineAddShoppingCart}
                marginRight={2}
                fontWeight={500}
              />
              ADD TO CART
            </Button>

            <Flex gap={3}>
              <Flex alignItems="center" gap={1} color="#2879fe" fontSize="14px">
                <Icon as={AiOutlineHeart} />
                ADD TO WISHLIST
              </Flex>
              <Flex alignItems="center" gap={1} color="#2879fe" fontSize="14px">
                <Icon as={MdOutlineBalance} />
                ADD TO COMPARE
              </Flex>
            </Flex>
            <Stack color="gray.500" fontSize={14}>
              <Text>Vendor: Denim Jacket</Text>
              <Text>Product Type: Jacket</Text>
              <Text>Tag: Jacket, Uni-Sex, Top</Text>
              <Divider />
              <Flex direction="column" gap={2}>
                <Text>DESCRIPTION</Text>
                <Divider />
                <Text>ADDITIONAL INFORMATION</Text>
                <Divider />
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
