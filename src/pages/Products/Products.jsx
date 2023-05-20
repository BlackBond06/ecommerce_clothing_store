import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Products = () => {
  const categoryId = Number(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      <Flex  direction={{base:"column", md:"unset"}} padding={{base:"unset", md:"unset", lg:"30px 50px"}}>
        <Flex direction="column" flex={1} position="sticky"
        height={{base:"auto", md:"auto", lg:"100%"}}
        top="50px"
        padding={{base:"30px 50px", md:"30px 10px", lg:"unset"}}
        zIndex={3}
        backgroundColor={{base:"gray.100", md:"gray.100", lg:"unset"}}
        >
          <Box>
            <Heading fontSize="14px"  marginBottom="20px">Product Categories</Heading>
            <Flex marginBottom="10px">
              <Checkbox value={1} />
              <Tag marginLeft="10px" background="inherit">
                <TagLabel>Shoes</TagLabel>
              </Tag>
            </Flex>
            <Flex marginBottom="10px">
              <Checkbox value={1} />
              <Tag marginLeft="10px" background="inherit">
                <TagLabel >Gowns</TagLabel>
              </Tag>
            </Flex>
            <Flex align="center">
              <Checkbox value={1} />
              <Tag marginLeft="10px" background="inherit">
                <TagLabel>Suits</TagLabel>
              </Tag>
            </Flex>
          </Box>
          <Box marginBottom="30px">
            <Heading fontSize="14px" marginBottom="20px" marginTop="20px">Filter by price</Heading >
            <Flex gap={2} width="200px">
              <Text>0</Text>
              <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 1000]} onChange={(e)=> setMaxPrice(e[1])}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>{maxPrice}</Text>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize="14px" marginBottom="20px">Sort by</Heading>
            <Flex gap="10px">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setSort("asc")}/>
              <label htmlFor="asc" >Price (Lowest first)</label>
            </Flex>
            <Flex gap="10px">
              <input type="radio" id="desc" value="asc" name="price" onChange={(e)=> setSort("desc")}/>
              <label htmlFor="desc" >Price (Highest first)</label>
            </Flex>
          </Box>
        </Flex>
        <Flex  direction="column" flex={3}>
          <Box height="300px" marginBottom="50px">
          <Image src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
          height="100%"
          width="100%"
          objectFit="cover"
          />
          </Box>
          <Box padding={{base:"30px 50px", md:"20px 12px", lg:"unset"}}>

          <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
          </Box>
          
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Products;
