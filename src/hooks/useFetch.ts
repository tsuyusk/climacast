import useSWR from "swr";
import axios from "axios";

export default function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, isValidating } = useSWR<Data, Error>(
    `https://api.openweathermap.org/data/2.5/${url}&units=metric&appid=e874e11deb027e1d25bd2598ae20e169`,
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    }
  );

  return { data, error, isLoading: isValidating };
}
