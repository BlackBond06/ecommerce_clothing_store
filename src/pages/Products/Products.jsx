import {
  Box,
  Checkbox,
  Flex,
  TagLabel,
  Text,
  Tag,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Products = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      <Flex>
        <Flex direction="column">
          <Box>
            <Heading fontSize="14px">Product Categories</Heading>
            <Flex>
              <Checkbox value={1} />
              <Tag>
                <TagLabel>Shoes</TagLabel>
              </Tag>
            </Flex>
            <Flex>
              <Checkbox value={1} />
              <Tag>
                <TagLabel>Gowns</TagLabel>
              </Tag>
            </Flex>
            <Flex>
              <Checkbox value={1} />
              <Tag>
                <TagLabel>Suits</TagLabel>
              </Tag>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize="14px">Filter by price</Heading>
            <Flex gap={2} width="200px">
              <Text>0</Text>
              <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 1000]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>1000</Text>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize="14px">Sort by</Heading>
            <Box>
              <input type="radio" id="asc" value="asc" name="price"/>
              <label htmlFor="asc" >Price (Lowest first)</label>
            </Box>
            <Box>
              <input type="radio" id="desc" value="asc" name="price"/>
              <label htmlFor="desc" >Price (Highest first)</label>
            </Box>
          </Box>
        </Flex>
        <Flex direction="column">
          <Image src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>

        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Products;
