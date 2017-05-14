import React from 'react';
import styled from 'styled-components';

import { GenderFilter, SizeFilter, Button, Icon, Label } from './styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  font-weight: bold;
  padding: 0.75em 0.8em;
  border-bottom: 3px solid #e7e7e7;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default () => (
  <Wrapper>
    <GenderFilter>
      <Icon src={require('./filter.png')} />
      <Button isActive>Man</Button>
      <Button>Woman</Button>
    </GenderFilter>
    <SizeFilter>
      <Label>Size</Label>
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button isActive>40</Button>
      <Button>41</Button>
    </SizeFilter>
  </Wrapper>
);
