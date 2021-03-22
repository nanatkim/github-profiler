import React from "react";
import { UserData } from "../../hooks/profile";

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

const UserInfo: React.FC<UserData> = ({
  name,
  avatar_url,
  followers,
  public_repos,
  stars,
  watchers,
  forks,
}) => {
  return (
    <Container>
      <Section>
        <Head>
          {name}'s profile
          <EditIcon />
          <RefreshIcon />
        </Head>
      </Section>
      <Section>
        <Avatar src={avatar_url} />
        <Info>
          <span>
            <PeopleIcon />
            {followers} followers
          </span>
          <span>
            <RepoIcon />
            {public_repos} public repositories
          </span>
          <span>
            <StarIcon />
            {stars} stars
          </span>
          <span>
            <EyeIcon />
            {watchers} watchers
          </span>
          <span>
            <ForkIcon />
            {forks} forks
          </span>
        </Info>
      </Section>
    </Container>
  );
};

export default UserInfo;
