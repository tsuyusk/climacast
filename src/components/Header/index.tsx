import React, {
  FormEvent,
  useState,
  useEffect,
  useCallback,
  useRef
} from "react";
import * as Icon from "react-icons/fi";
import * as S from "./styles";

interface HeaderProps {
  defaultInputValue: string;
  onChangeInput: (value: string) => any;
}

const Header: React.FC<HeaderProps> = ({
  defaultInputValue = "",
  onChangeInput
}) => {
  const timeoutRef = useRef<number>();

  const [inputValue, setInputValue] = useState(defaultInputValue);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onChangeInput(inputValue);
    }, 1000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue, onChangeInput]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      clearTimeout(timeoutRef.current);

      onChangeInput(inputValue);
    },
    [inputValue, onChangeInput]
  );

  return (
    <S.Header>
      <div>
        <S.LogoWrapper>
          <a href="https://ij24j.csb.app/">
            <Icon.FiCloud size={24} color="#333" />
            <span>ClimaCast</span>
          </a>
        </S.LogoWrapper>

        <S.SearchContainer htmlFor="header-input">
          <form onSubmit={handleSubmit}>
            <input
              id="header-input"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <button type="submit">
              <Icon.FiSearch size={24} />
            </button>
          </form>
        </S.SearchContainer>
      </div>
    </S.Header>
  );
};

export default Header;
