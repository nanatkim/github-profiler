import React from "react";

import { Container, Title, Content } from "./styles";

const Notes: React.FC = () => {
  return (
    <Container>
      <Title>NOTES</Title>
      <Content>
        here are some notes about this user, maybe there's something interesting
        to read about them
      </Content>
    </Container>
  );
};

export default Notes;
