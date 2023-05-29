import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PurchaseModal = ({ isOpen }) => {
  return (
    <Flex
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top="20%"
      right={{ base: isOpen ? "0%" : "-200px", md: isOpen ? "30%" : "-200px" }}
      transform="translateY(-50%)"
      width="500px"
      height="50px"
      backgroundColor="#a435f0"
      transition="right .350ms"
      ali
    >
      <Text color="white" textAlign="center">
        Purchase successful!
      </Text>
    </Flex>
  );
};

export default PurchaseModal;
