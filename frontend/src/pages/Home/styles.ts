import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: relative;
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
    width: 150px;

    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 1.5rem;
    margin: .5rem;
    color: var(--blue);
    cursor: pointer;
  }
`;
