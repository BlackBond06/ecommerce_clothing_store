import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostLoader from "../PostLoader/PostLoader";

const Categories = () => {
  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImageFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setPhotosResponse(result);
    } catch (error) {
      console.log("fetchImageFromApi error: ", error.message);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchImageFromApi();
  }, []);

  if (data === null) {
    return <PostLoader />;
  } else if (data.errors) {
    return <Box>{data.errors[0]}</Box>;
  } else {
    const [first, second, third, fourth, fifth, sixth] = data;
    return (
      <>
        {loading ? (
          <PostLoader />
        ) : (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={2}
            margin="100px 10px 100px 10px"
          >
            <Flex
              flex={1}
              direction="column"
              gap={{ base: "60px", md: "10px" }}
            >
              <Flex
                flex={1}
                position="relative"
                overflow="hidden"
                height={{ base: "400px", md: "auto" }}
              >
                <Image
                  src={first.image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
                <Button
                  position="absolute"
                  minWidth="100px"
                  width="fit-content"
                  height="40px"
                  padding="10px"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  cursor="pointer"
                  border="none"
                  background="#66c3d0"
                  textTransform="uppercase"
                >
                  <Link to="/Products/1">Sale</Link>
                </Button>
                <Text
                  textAlign="center"
                  position="absolute"
                  left="50%"
                  top="65%"
                  transform="translate(-50%, -50%)"
                  color="white"
                >
                  ${first.title}
                </Text>
                <Text
                  textAlign="center"
                  position="absolute"
                  left="50%"
                  top="75%"
                  transform="translate(-50%, -50%)"
                  color="white"
                >
                  ${first.price}
                </Text>
              </Flex>
              <Flex
                flex={1}
                position="relative"
                overflow="hidden"
                height={{ base: "400px", md: "auto" }}
              >
                <Image
                  src={second.image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
                <Button
                  position="absolute"
                  minWidth="100px"
                  width="fit-content"
                  height="40px"
                  padding="10px"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  cursor="pointer"
                  border="none"
                  background="#66c3d0"
                  textTransform="uppercase"
                >
                  <Link to="/Products/1">Sale</Link>
                </Button>
                <Text
                  textAlign="center"
                  position="absolute"
                  left="50%"
                  top="65%"
                  transform="translate(-50%, -50%)"
                  color="white"
                >
                  ${second.title}
                </Text>
                <Text
                  textAlign="center"
                  position="absolute"
                  left="50%"
                  top="75%"
                  transform="translate(-50%, -50%)"
                  color="white"
                >
                  ${second.price}
                </Text>
              </Flex>
            </Flex>
            <Flex
              flex={1}
              position="relative"
              overflow="hidden"
              marginTop={{ base: "60px", md: "unset" }}
              height={{ base: "400px", md: "auto" }}
            >
              <Image
                src={third.image}
                width="100%"
                height="100%"
                objectFit="cover"
              />
              <Button
                position="absolute"
                minWidth="100px"
                width="fit-content"
                height="40px"
                padding="10px"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                cursor="pointer"
                border="none"
                background="#66c3d0"
                textTransform="uppercase"
              >
                <Link to="/Products/1">Sale</Link>
              </Button>
              <Text
                textAlign="center"
                position="absolute"
                left="50%"
                top="55%"
                transform="translate(-50%, -50%)"
                color="white"
              >
                ${third.title}
              </Text>
              <Text
                textAlign="center"
                position="absolute"
                left="50%"
                top="58%"
                transform="translate(-50%, -50%)"
                color="white"
              >
                ${third.price}
              </Text>
            </Flex>
            <Flex flex={2} direction="column">
              <Flex
                flex={1}
                direction={{ base: "column", md: "row" }}
                gap={{ base: "20px", md: "10px" }}
              >
                <Flex flex={1} marginTop={{ base: "50px", md: "unset" }}>
                  <Flex
                    flex={1}
                    position="relative"
                    overflow="hidden"
                    height={{ base: "400px", md: "auto" }}
                  >
                    <Image
                      src={fourth.image}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                    <Button
                      position="absolute"
                      minWidth="100px"
                      width="fit-content"
                      height="40px"
                      padding="10px"
                      left="50%"
                      top="50%"
                      transform="translate(-50%, -50%)"
                      cursor="pointer"
                      border="none"
                      background="#66c3d0"
                      textTransform="uppercase"
                    >
                      <Link to="/Products/1">Sale</Link>
                    </Button>

                    <Text
                      textAlign="center"
                      position="absolute"
                      left="50%"
                      top="60%"
                      transform="translate(-50%, -50%)"
                      color="white"
                    >
                      ${fourth.title}
                    </Text>
                    <Text
                      textAlign="center"
                      position="absolute"
                      left="50%"
                      top="65%"
                      transform="translate(-50%, -50%)"
                      color="white"
                    >
                      ${fourth.price}
                    </Text>
                  </Flex>
                </Flex>
                <Flex flex={1}>
                  <Flex
                    flex={1}
                    position="relative"
                    overflow="hidden"
                    height={{ base: "400px", md: "auto" }}
                  >
                    <Image src={fifth.image} width="100%" height="100%" />
                    <Button
                      position="absolute"
                      minWidth="100px"
                      width="fit-content"
                      height="40px"
                      padding="10px"
                      left="50%"
                      top="50%"
                      transform="translate(-50%, -50%)"
                      cursor="pointer"
                      border="none"
                      background="#66c3d0"
                      textTransform="uppercase"
                    >
                      <Link to="/Products/1">Sale</Link>
                    </Button>
                    <Text
                      textAlign="center"
                      position="absolute"
                      left="50%"
                      top="65%"
                      transform="translate(-50%, -50%)"
                      color="gray"
                    >
                      ${fifth.title}
                    </Text>
                    <Text
                      textAlign="center"
                      position="absolute"
                      left="50%"
                      top="77%"
                      transform="translate(-50%, -50%)"
                      color="gray"
                    >
                      ${fifth.price}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flex={1} overflow="hidden">
                <Flex
                  flex={1}
                  position="relative"
                  marginTop={{ base: "50px", md: "10px" }}
                >
                  <Image
                    src={sixth.image}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                  <Button
                    position="absolute"
                    minWidth="100px"
                    width="fit-content"
                    height="40px"
                    padding="10px"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    cursor="pointer"
                    border="none"
                    background="#66c3d0"
                    textTransform="uppercase"
                  >
                    <Link to="/Products/1">Sale</Link>
                  </Button>
                  <Text
                    textAlign="center"
                    position="absolute"
                    left="50%"
                    top="62%"
                    transform="translate(-50%, -50%)"
                    color="gray"
                  >
                    ${sixth.title}
                  </Text>
                  <Text
                    textAlign="center"
                    position="absolute"
                    left="50%"
                    top="70%"
                    transform="translate(-50%, -50%)"
                    color="gray"
                  >
                    ${sixth.price}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
      </>
    );
  }
};

export default Categories;
