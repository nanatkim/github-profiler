import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Wrapper, SearchForm } from "./styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    history.push("/" + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <Wrapper>
        <span>github.com/</span>
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="octocat"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <span onClick={handleSubmit}>▷</span>
        </SearchForm>
      </Wrapper>
    </Container>
  );
};

export default Home;
