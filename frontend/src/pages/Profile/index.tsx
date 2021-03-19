import React from 'react';
import LanguagesInfo from '../../components/LanguagesInfo';
import UserInfo from '../../components/UserInfo';

import { Container } from './styles';

const Profile: React.FC = () => {
  return(
    <Container>
      <UserInfo />
      <LanguagesInfo />
    </Container>
  );
}

export default Profile;