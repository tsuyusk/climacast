import useSWR from "swr";
import api from "../services/api";

export default function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, isValidating } = useSWR<Data, Error>(
    `/${url}&units=metric&appid=e874e11deb027e1d25bd2598ae20e169`,
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false
    }
  );

  return { data, error, isLoading: isValidating };
}
