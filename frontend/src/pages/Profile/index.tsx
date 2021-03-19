import React from 'react';
import UserInfo from '../../components/UserInfo';
import LanguagesInfo from '../../components/LanguagesInfo';
import Notes from '../../components/Notes';

import { Container } from './styles';

const Profile: React.FC = () => {
  return(
    <Container>
      <UserInfo />
      <LanguagesInfo />
      <Notes />
    </Container>
  );
}

export default Profile;