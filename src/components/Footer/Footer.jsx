import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      margin={{ base: "100px 20px 20px 20px", lg: "100px 200px 20px 200px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "25px", md: "50px" }}
        fontSize=".8em"
        marginBottom="50px"
      >
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Categories
          </Heading>
          <Text marginTop="10px">Men</Text>
          <Text marginTop="10px">Women</Text>
          <Text marginTop="10px">Kids</Text>
          <Text marginTop="10px">New Arrivals</Text>
          <Text marginTop="10px">Sales</Text>
        </Box>
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Links
          </Heading>
          <Text marginTop="10px">FAQ</Text>
          <Text marginTop="10px">Pages</Text>
          <Text marginTop="10px">Stores</Text>
          <Text marginTop="10px">Compare</Text>
          <Text marginTop="10px">Cookies</Text>
        </Box>
        <Box flex={2}>
          <Heading fontSize="18px" color="#555">
            About
          </Heading>
          <Text textAlign="justify" marginTop="10px">
            Welcome to StyleStocks, your go-to destination for all things
            fashion. Our online clothing store offers a wide range of trendy and
            affordable apparel for women and men of all ages. We pride ourselves
            on delivering the latest styles and high-quality clothing that
            you'll love to wear, day after day. Our team is dedicated to
            providing excellent customer service and ensuring that you have a
            seamless shopping experience every time. Thank you for choosing
            StyleStocks - we can't wait to help you look and feel your best!
          </Text>
        </Box>
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Contact
          </Heading>
          <Text textAlign="justify" marginTop="10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            architecto exercitationem vero aspernatur quidem iure totam,
            inventore debitis numquam. Similique?
          </Text>
        </Box>
      </Flex>
      <Flex
      
        justify="space-between"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Flex align="center" marginTop={{base:"20px", md:"unset"}}>
          <Text color="#2879fe" fontWeight={500} fontStyle="italic">
            STYLESTOCK
          </Text>
          <Text marginLeft="10px" fontSize="12px">
            Copyright 2023. All Rights Reserved{" "}
          </Text>
        </Flex>
        <Box>
          <Image src="/Assets/payment.png" height="50px" />
        </Box>
      </Flex>
    </Stack>
  );
};

export default Footer;
