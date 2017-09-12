import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import DebounceInput from '../src/components/DebounceInput';
import PropsOrderUpdateArray from '../src/components/PropsOrderUpdateArray';

import Labels from '../src/components/designed/Labels';

storiesOf('Components', module)
  .add('DebounceInput', () => (
    <DebounceInput />
  ))
  .add('PropsOrder', () => (
    <PropsOrderUpdateArray />
  ))
  .add('Designed Components: Labels', () => (
    <div>
      <Labels />
    </div>
  ));
