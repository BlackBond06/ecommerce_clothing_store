import { Box, Skeleton, SkeletonText, Stack, Flex } from "@chakra-ui/react";
import React from "react";

const PostLoader = () => {
  return (
    <Stack
    width="100%"
    
    padding={{ base: "50px 25px 10px 25px", md:"70px 100px 10px 100px", lg: "100px 174px" }}
    >

    <Flex spacing={6}  wrap="wrap" 
    direction={{base:"column", md:"column", lg:"unset"}}
    gap="50px"
    width="100%"
    
    >
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px"  width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
      
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
      <Box padding="10px 10px" boxShadow="lg" bg="white" borderRadius={4} >
        <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton mt="4" height="200px" width={{ base: "auto", md: "auto", lg:"280px" }}/>
      </Box>
    </Flex>
    </Stack>
  );
};

export default PostLoader;
