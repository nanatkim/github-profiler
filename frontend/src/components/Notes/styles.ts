import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  @media (min-width: 1025px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

export const Title = styled.div`
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1rem;
  font-weight: 600;
  color: var(--gray);

  @media (min-width: 768px) {
    width: 50%;
  }
`;
