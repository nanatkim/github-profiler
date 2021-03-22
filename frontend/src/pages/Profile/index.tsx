import React, { useEffect } from "react";
import { useProfile } from "../../hooks/profile";

import UserInfo from "../../components/UserInfo";
import LanguagesInfo from "../../components/LanguagesInfo";
import Notes from "../../components/Notes";

import { Container } from "./styles";

const Profile: React.FC = () => {
  const { user, getUser } = useProfile();

  useEffect(() => {
    getUser("nanatkim");

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <UserInfo {...user} />
      <LanguagesInfo />
      <Notes />
    </Container>
  );
};

export default Profile;
