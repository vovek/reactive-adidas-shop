import React from 'react';
import styled from 'styled-components';

import { SwitchButton } from './styled';

const Wrapper = styled.div`
  display: flex;
`;

export default props => (
  <Wrapper>
    <SwitchButton color="red" />
    <SwitchButton color="blue" />
    <SwitchButton color="green" />
    <SwitchButton color="black" />
  </Wrapper>
);
