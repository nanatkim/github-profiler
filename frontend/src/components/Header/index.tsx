import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Title } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    history.push("/");
  }

  return (
    <Container>
      <Title onClick={handleSubmit}>Github profiler</Title>
    </Container>
  );
};

export default Header;
