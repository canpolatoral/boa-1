/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputNumeric } from '@boa/components/InputNumeric';
import Header from '../../base/header';
import Props from '../../base/props-table';
import Preview from '../../base/preview';
import doc from './doc.json';

const stories = storiesOf('Inputs', module);

stories.add('InputNumeric', ({ props }) => {
  return (
    <div style={{ padding: 20, background: 'white', textAlign: 'justify' }}>
      <Header {...props} component={InputNumeric} doc={doc} />
      <Preview {...props} component={InputNumeric} doc={doc} />
      <Props {...props} component={InputNumeric} doc={doc} />
    </div>
  );
});
