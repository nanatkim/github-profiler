import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  border: 1px solid var(--border);

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Col = styled.div<{ size?: number }>`
  flex: ${(props) => props.size};
  padding: 0.5rem;
`;
