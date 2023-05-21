import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequest.get(url);

        const result = response.data.data;

        setData(result);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;