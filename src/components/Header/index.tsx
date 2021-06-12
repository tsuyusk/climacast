import React, { useState, useEffect } from "react";
import * as Icon from "react-icons/fi";
import * as S from "./styles";

interface HeaderProps {
  defaultInputValue: string;
  onChangeInput: (value: string) => any;
}

const Header: React.FC<HeaderProps> = ({
  defaultInputValue,
  onChangeInput
}) => {
  const [inputValue, setInputValue] = useState(defaultInputValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChangeInput(inputValue);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue, onChangeInput]);

  return (
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
  );
};

export default Header;
