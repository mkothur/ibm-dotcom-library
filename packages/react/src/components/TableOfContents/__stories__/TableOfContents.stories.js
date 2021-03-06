/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { object, text, boolean } from '@storybook/addon-knobs';
import dataContent from './data/dataContent';
import React from 'react';
import readme from '../README.stories.mdx';
import TableOfContents from '../TableOfContents';

const defaultMenuItems = [
  {
    title: 'Cras molestie condimentum',
    id: '8',
  },
  {
    title: 'Praesent fermentum sodales',
    id: '7',
  },
  {
    title: 'Nulla tristique lacinia',
    id: '2',
  },
  {
    title: 'Morbi id nibh metus',
    id: '3',
  },
  {
    title: 'Integer non scelerisque',
    id: '14',
  },
];

export default {
  title: 'Components|Table of Contents',

  parameters: {
    ...readme.parameters,
  },
};

export const ManuallyDefineMenuItems = ({ parameters }) => {
  const { menuItems, menuLabel, menuRule, headingContent } =
    parameters?.props?.TableOfContents ?? {};
  const theme = document.documentElement.getAttribute('storybook-carbon-theme');
  return (
    <TableOfContents
      theme={theme}
      menuItems={menuItems}
      menuLabel={menuLabel}
      menuRule={menuRule}
      headingContent={headingContent}>
      {dataContent}
    </TableOfContents>
  );
};

ManuallyDefineMenuItems.story = {
  name: 'Manually define Menu Items',
  parameters: {
    knobs: {
      TableOfContents: ({ groupId }) => ({
        menuItems: object('menuItems', defaultMenuItems, groupId),
        menuLabel: text('menu label', 'Jump to', groupId),
        menuRule: boolean('Optional Rule', false, groupId),
      }),
    },
  },
};

export const DynamicItems = ({ parameters }) => (
  <ManuallyDefineMenuItems parameters={parameters} />
);

DynamicItems.story = {
  parameters: {
    knobs: {
      TableOfContents: ({ groupId }) => ({
        menuLabel: text('menu label', 'Jump to', groupId),
      }),
    },
  },
};

export const WithHeadingContent = ({ parameters }) => (
  <ManuallyDefineMenuItems parameters={parameters} />
);

WithHeadingContent.story = {
  parameters: {
    knobs: {
      TableOfContents: ({ groupId }) => ({
        menuItems: object('menuItems', defaultMenuItems, groupId),
        menuLabel: text('menu label', 'Jump to', groupId),
        menuRule: boolean('Optional Rule', false, groupId),
        headingContent: (
          <div
            style={{
              background: '#f4f4f4',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <h4>Example children</h4>
          </div>
        ),
      }),
    },
  },
};
