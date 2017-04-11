import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import DebounceInput from '../src/components/DebounceInput';

storiesOf('Components', module)
  .add('DebounceInput', () => (
    <DebounceInput />
  ));
