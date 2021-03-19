import React from "react";

import {
  Container,
  Section,
  Head,
  Avatar,
  Info,
  EditIcon,
  RefreshIcon,
  PeopleIcon,
  StarIcon,
  RepoIcon,
  ForkIcon,
  EyeIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Section>
        <Head>
          octocat's profile
          <EditIcon />
          <RefreshIcon />
        </Head>
      </Section>
      <Section>
        <Avatar src={"http://github.com/nanatkim.png"} />
        <Info>
          <span>
            <PeopleIcon />
            10 followers
          </span>
          <span>
            <RepoIcon />
            10 public repositories
          </span>
          <span>
            <StarIcon />
            10 stars
          </span>
          <span>
            <EyeIcon />
            10 watchers
          </span>
          <span>
            <ForkIcon />
            10 forks
          </span>
        </Info>
      </Section>
    </Container>
  );
};

export default UserInfo;
