import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card, { api } from "../Card/Card";
import PostLoader from "../PostLoader/PostLoader";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  // const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        setLoading(true);
        const response = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
          headers:{
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN 
          },
        });

        const result = response.data.data;

        
        setData(result);
      } catch (error) {
        console.log("fetchData error: ", error);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

 

  // const fetchImageFromApi = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await api.search.getPhotos({
  //       query: "gown",
  //       perPage: 6,
  //       orientation: "landscape",
  //     });
  //     setPhotosResponse(response);
  //   } catch (error) {
  //     console.log("fetchImageFromApi error: ", error.message);
  //   }

  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchImageFromApi();
  // }, []);

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

// Access key :5SXt8CLKOTFgkpYqj1ObxLmaW4FOAExtxR_I4GPGwKE

// Secret key :U7BGxylfsWzGtucoJ4cRcaznTIvxFbRHrFg1QpmETgE

export default FeaturedProducts;
