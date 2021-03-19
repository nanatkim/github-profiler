import React from 'react';
import UserInfo from '../../components/UserInfo';

import { Container } from './styles';

const Profile: React.FC = () => {
  return(
    <Container>
      <UserInfo />
    </Container>
  );
}

export default Profile;