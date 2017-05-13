import React from 'react';
import { Form, Input, Icon } from './styled-components';

export default () => (
  <Form action="/" method="GET">
    <Icon src={require('./search.svg')} />
    <Input />
  </Form>
);
