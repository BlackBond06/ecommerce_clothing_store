import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setPhotosResponse(result))
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <Box>Loading...</Box>;
  } else if (data.errors) {
    return <Box>{data.errors[0]}</Box>;
  } else {
    const [first, second, third, fourth, fifth, sixth] = data;
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={2}
        margin="100px 10px 100px 10px"
      >
        <Flex flex={1} direction="column" gap={{ base: "60px", md: "10px" }}>
          <Flex flex={1} position="relative" overflow="hidden">
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
          </Flex>
          <Flex flex={1} position="relative" overflow="hidden">
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
          </Flex>
        </Flex>
        <Flex
          flex={1}
          position="relative"
          overflow="hidden"
          marginTop={{ base: "60px", md: "unset" }}
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
        </Flex>
        <Flex flex={2} direction="column">
          <Flex
            flex={1}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "10px" }}
          >
            <Flex flex={1} marginTop={{ base: "50px", md: "unset" }}>
              <Flex flex={1} position="relative" overflow="hidden">
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
              </Flex>
            </Flex>
            <Flex flex={1}>
              <Flex flex={1} position="relative" overflow="hidden">
                <Image
                  src={fifth.image}
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
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
};

export default Categories;
