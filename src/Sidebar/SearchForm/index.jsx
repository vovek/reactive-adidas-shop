import React from 'react';
import { Form, Input, Icon } from './styled-components';
import search from './search.svg';

export default () => (
  <Form action="/" method="GET">
    <Icon src={search} />
    <Input />
  </Form>
);
