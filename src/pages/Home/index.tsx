import React, { useMemo, useState } from "react";
import Loader from "react-spinners/MoonLoader";
import * as Icon from "react-icons/fi";

import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import getObjectValue from "../../utils/getObjectValue";
import * as S from "./styles";

interface WeatherAPIResponse {
  name: string;
  wind: {
    speed: number;
  };
  weather: Array<{
    main: "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clear" | "Clouds";
  }>;
  main: {
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
}

const weatherIcons = {
  Rain: <Icon.FiCloudRain size={84} color="#333" />,
  Drizzle: <Icon.FiCloudDrizzle size={84} color="#333" />,
  Snow: <Icon.FiCloudSnow size={84} color="#333" />,
  Thunderstorm: <Icon.FiCloudLightning size={84} color="#333" />,
  Clouds: <Icon.FiCloud size={84} color="#333" />
};

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("Winnipeg");

  const { data, error, isLoading } = useFetch<WeatherAPIResponse>(
    `weather?q=${inputValue}`
  );

  const parsedData = useMemo(() => {
    if (!data || error) {
      return null;
    }

    return {
      ...data,
      main: {
        ...data.main,
        temp_max: Math.floor(data.main.temp_max)
      }
    };
  }, [data, error]);

  const airQuality = useMemo(() => {
    if (!data || error) {
      return "...";
    }

    const { humidity } = data.main;

    if (humidity >= 70) {
      return "Good";
    } else if (humidity <= 40) {
      return "Bad";
    } else {
      return "Normal";
    }
  }, [data, error]);

  if (error) {
    return (
      <S.Container>
        <Header defaultInputValue={inputValue} onChangeInput={setInputValue} />

        <S.MainContent>
          <div>
            <header>
              <Icon.FiX size={84} color="#B00020" />

              <S.ErrorMessage>
                <h1>Oops!</h1>
                <span>
                  We did not find the city you are looking for. <br /> Check if
                  it's miswritten and try again
                </span>
              </S.ErrorMessage>
            </header>
          </div>
        </S.MainContent>
      </S.Container>
    );
  }

  if (isLoading || !parsedData) {
    return (
      <S.Container>
        <Header defaultInputValue={inputValue} onChangeInput={setInputValue} />

        <S.MainContent>
          <Loader color="#333" size={84} />
        </S.MainContent>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header defaultInputValue={inputValue} onChangeInput={setInputValue} />

      <S.MainContent>
        <div>
          <header>
            {getObjectValue(weatherIcons, parsedData.weather[0].main) || (
              <Icon.FiSun size={84} color="#333" />
            )}

            <div>
              <h1>{parsedData.main.temp_max}°</h1>

              <span>{parsedData.name}</span>
            </div>
          </header>

          <main>
            <div>
              <strong>Wind</strong>
              <span>{parsedData.wind.speed} km/h</span>
            </div>

            <div>
              <strong>Humidity</strong>
              <span>{parsedData.main.humidity}%</span>
            </div>

            <div>
              <strong>Air Quality</strong>
              <span>{airQuality}</span>
            </div>

            <div>
              <strong>Weather</strong>
              <span>{parsedData.weather[0].main}</span>
            </div>
          </main>
        </div>
      </S.MainContent>
    </S.Container>
  );
};

export default Home;
