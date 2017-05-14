import React from 'react';

import Button from '../Button';
import { Wrapper, Icon } from './styled';
import iconImage from './filter.png';

export default () => (
  <Wrapper>
    <Icon src={iconImage} />
    <Button>Man</Button>
    <Button>Woman</Button>
  </Wrapper>
);
