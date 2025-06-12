import { axiosWrapper } from "@/config/axiosWrapper";
import { useEffect, useState } from "react";

export const useFetch = (url: string, ...dependecies) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosWrapper.get(url);

        setData(response.data.data);
        setError(false);
        setErrorMessage("");
      } catch (error) {
        setError(true);
        setErrorMessage("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [...dependecies]);

  return {
    data,
    loading,
    error,
    errorMessage,
  };
};
