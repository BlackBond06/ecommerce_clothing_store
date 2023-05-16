import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <Stack
      height={{ base: "auto", md: "auto", lg:"800px" }}
      width="100%"
      position="relative"
      overflow="hidden"
    >
      <Flex width="100%" height="auto">
        <Image
          src={data[currentSlide]}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Flex>
      <Flex
        align="center"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        width="fit-content"
        gap={2}
      >
        <Flex
          align="center"
          justify="center"
          width={10}
          height={10}
          border="1px solid #999"
          cursor="pointer"
        >
          <Icon as={ArrowLeftIcon} onClick={prevSlide}></Icon>
        </Flex>
        <Flex
          align="center"
          justify="center"
          width={10}
          height={10}
          border="1px solid #999"
          cursor="pointer"
        >
          <Icon as={ArrowRightIcon} onClick={nextSlide}></Icon>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Slider;
