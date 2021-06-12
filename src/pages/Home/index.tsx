import React, { useMemo, useState } from "react";
import Loader from "react-spinners/BounceLoader";
import * as Icon from "react-icons/fi";

import useFetch from "../../hooks/useFetch";
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
    temp: number;
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
  const [inputValue, setInputValue] = useState("Belo Horizonte");

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
        temp: Math.floor(data.main.temp)
      }
    } as WeatherAPIResponse;
  }, [data, error]);

  const airQuality = useMemo(() => {
    if (!data) return "";

    return data.main.humidity > 70 ? "Good" : "Bad";
  }, [data]);

  if (error) {
    return (
      <S.Container>
        <S.Header>
          <div>
            <S.LogoWrapper>
              <Icon.FiCloud size={24} color="#333" />
              <span>ClimaCast</span>
            </S.LogoWrapper>

            <S.SearchContainer>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />

              <button>
                <Icon.FiSearch size={24} color="#333" />
              </button>
            </S.SearchContainer>
          </div>
        </S.Header>

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
        <S.Header>
          <div>
            <S.LogoWrapper>
              <Icon.FiCloud size={24} color="#333" />
              <span>ClimaCast</span>
            </S.LogoWrapper>

            <S.SearchContainer>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />

              <button>
                <Icon.FiSearch size={24} color="#333" />
              </button>
            </S.SearchContainer>
          </div>
        </S.Header>

        <S.MainContent>
          <Loader color="#333" size={84} />
        </S.MainContent>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.LogoWrapper>
            <Icon.FiCloud size={24} color="#333" />
            <span>ClimaCast</span>
          </S.LogoWrapper>

          <S.SearchContainer>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <button>
              <Icon.FiSearch size={24} color="#333" />
            </button>
          </S.SearchContainer>
        </div>
      </S.Header>

      <S.MainContent>
        {error ? (
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
        ) : (
          <div>
            <header>
              {weatherIcons[parsedData.weather[0].main as "Rain"] ? (
                weatherIcons[parsedData.weather[0].main as "Rain"]
              ) : (
                <Icon.FiSun size={84} color="#333" />
              )}

              <div>
                <h1>{parsedData.main.temp}°</h1>

                <span>{parsedData.name}</span>
              </div>
            </header>

            <main>
              <div>
                <strong>Wind</strong>
                <span>{parsedData.wind.speed || "..."} km/h</span>
              </div>

              <div>
                <strong>Humidity</strong>
                <span>{parsedData.main.humidity || "..."}%</span>
              </div>

              <div>
                <strong>Air Quality</strong>
                <span>{airQuality || "..."}</span>
              </div>

              <div>
                <strong>Weather</strong>
                <span>{parsedData.weather[0].main || "..."}</span>
              </div>
            </main>
          </div>
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default Home;
