import React from 'react';
import styled from 'styled-components';

import SwitchButton from './styled';

const Wrapper = styled.div`
  display: flex;
`;

export default (props) => {
  const colors = props.colors;
  const Switchers = colors.map(color => <SwitchButton color={color} />);
  return (
    <Wrapper>
      {Switchers}
    </Wrapper>
  );
};
