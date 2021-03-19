import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";

export const Container = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  span {
    font-size: 1.5rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  margin-left: 1rem;

  input {
    padding: 1rem;
    width: 120px;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 768px) {
    input {
      width: 150px;
    }
  }
`;

export const ArrowIcon = styled(BiRightArrow)`
  margin: 0.5rem;
  fill: var(--primary);
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
