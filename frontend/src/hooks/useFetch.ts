import { useEffect, useState } from "react";

export const useFetch = <T>(
  func: any,
  ...dependecies: readonly unknown[]
) => {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await func();

        setData(response.data.data as T);
        setError(false);
        setErrorMessage("");
      } catch (error) {
        console.log(error);
        setError(true);
        setErrorMessage("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, ...dependecies]);

  return {
    data,
    loading,
    error,
    errorMessage,
  };
};
