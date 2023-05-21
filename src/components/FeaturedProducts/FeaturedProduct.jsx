import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import PostLoader from "../PostLoader/PostLoader";

const FeaturedProducts = ({ type }) => {

  const {data, error, loading} = useFetch("/products?populate=*")
 
  if (data === null) {
    return <PostLoader />;
  } else if (error) {
    return (
      <div>
        <div>{error}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <>
        {loading ? (
          <PostLoader />
        ) : (
          <Stack
            margin={{
              base: "50px 25px 10px 25px",
              md: "70px 70px 10px 70px",
              lg: "100px 200px",
            }}
            paddingLeft={{base:"unset", md:"35px", lg:"unset"}}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
              mb="50px"
            >
              <Heading fontSize="20" flex={2} textTransform="capitalize">
                {type} category
              </Heading>
              <Text textAlign="justify" flex={3}>
                Whether you're in the market for a new wardrobe or just looking
                for some inspiration, our featured section is the ultimate
                destination for all things fashion.
              </Text>
            </Flex>
            <Flex>
              <Flex align="center" wrap="wrap" gap="50px" position="relative">
                {data.map((photo, idx) => (
                  <Card key={idx} photo={photo} />
                ))}
              </Flex>
            </Flex>
          </Stack>
        )}
      </>
    );
  }
};



export default FeaturedProducts;
