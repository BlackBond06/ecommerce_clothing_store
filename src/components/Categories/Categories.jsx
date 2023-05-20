import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostLoader from "../PostLoader/PostLoader";

const Categories = () => {
  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImageFromApi = async ()=>{
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setPhotosResponse(result);
    } catch (error) {
      console.log("fetchImageFromApi error: ", error.message);
    }

    setLoading(false);
   
  }
  useEffect(() => {
   
    fetchImageFromApi();
  }, []);

  if (data === null) {
    return (<PostLoader/>);
  } else if (data.errors) {
    return <Box>{data.errors[0]}</Box>;
  } else {
    const [first, second, third, fourth, fifth, sixth] = data;
    return (
      <>
      {loading ? (<PostLoader/>) :
      (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={2}
        margin="100px 10px 100px 10px"
      >
        <Flex flex={1} direction="column" gap={{ base: "60px", md: "10px" }}>
          <Flex flex={1} position="relative" overflow="hidden" height={{ base: "400px", md: "auto" }}>
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
          <Flex flex={1} position="relative" overflow="hidden" height={{ base: "400px", md: "auto" }}>
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
        </Flex>
        <Flex flex={2} direction="column">
          <Flex
            flex={1}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "10px" }}
          >
            <Flex flex={1} marginTop={{ base: "50px", md: "unset" }}>
              <Flex flex={1} position="relative" overflow="hidden"
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
              </Flex>
            </Flex>
            <Flex flex={1}>
              <Flex flex={1} position="relative" overflow="hidden"
              height={{ base: "400px", md: "auto" }}
              >
                <Image
                  src={fifth.image}
                  width="100%"
                  height="100%"
                  
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
      )
      }
      </>
    );
  }
};

// apiToken = 9b615a125b4b3abfb44116e2fc668410bd80d97dce0d9c655b1d5a88d174315cf946cb50e4921b118d204fb8319ae1e7129820a0c88245501be021d04145ac2433513d830033b067c533958ba6b226b141b4ab29be6e7ae33c2a0aa0bea227ca8824db7e5e49b64fc2ea715db0f0156dd3789f6e87535581a0ae757c872cc32c

export default Categories;
