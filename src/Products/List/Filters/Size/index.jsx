import React from 'react';

import Button from '../Button';
import { Wrapper, Label } from './styled';

export default () => (
  <Wrapper>
    <Label>Size</Label>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button isActive>40</Button>
    <Button>41</Button>
  </Wrapper>
);
