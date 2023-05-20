import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { api } from "../Card/Card";
import PostLoader from "../PostLoader/PostLoader";
import Unsplash from "../Unsplash/Unsplash";

const List = () => {
  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImageFromApi = async () => {
    try {
      setLoading(true);
      const response = await api.search.getPhotos({
        query: "products",
        perPage: 6,
        orientation: "landscape",
      });
      setPhotosResponse(response);
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
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  }else{

    return (
    <Flex wrap="wrap" align="center" gap={{base:"48px", md:"20px", lg:"48px"}}>
      {
        data.response.results.map((photo, idx) => (
          <Unsplash key={idx} photo={photo} />
        ))
      }
    </Flex>
    );
  }
};

export default List;
