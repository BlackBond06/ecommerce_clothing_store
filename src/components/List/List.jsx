import { Flex } from "@chakra-ui/react";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import PostLoader from "../PostLoader/PostLoader";

const List = ({ subCategory, maxPrice, sort, categoryId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCategory.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );


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
      <Flex
        wrap="wrap"
        align="center"
        gap={{ base: "48px", md: "20px", lg: "48px" }}
      >
        {loading ? (
          <PostLoader />
        ) : (
          data?.map((photo, idx) => <Card key={idx} photo={photo} />)
        )}
      </Flex>
    );
  }
};

export default List;
