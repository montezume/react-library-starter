import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Button } from '../dist/react-library-starter.esm';

console.log('here');

storiesOf('Components|Buttons', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button type={select('type', ['submit', 'reset', 'button'], 'button')}>
      My button
    </Button>
  ));
