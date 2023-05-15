import { Flex, Heading, Stack, Text, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card, { api } from "../Card/Card";

const TrendingProducts = ({ type }) => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "models", perPage: 6, orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <Stack margin={{ base: "50px 25px 10px 25px", md:"70px 100px 10px 100px", lg: "100px 200px" }}>
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
            We've scoured the runways and the streets to bring you the most
            stylish and sought-after trends in the industry. From haute couture
            to street style, we've got you covered with the latest looks that
            are sure to turn heads.
          </Text>
        </Flex>
        <Flex>
          <Flex align="center" wrap="wrap" gap="50px" position="relative">
            {data.response.results.map((photo, idx) => (
              <Skeleton isLoaded={data ? true : false}>
                <Card key={idx} photo={photo} />
              </Skeleton>
            ))}
          </Flex>
        </Flex>
      </Stack>
    );
  }
};

export default TrendingProducts;
