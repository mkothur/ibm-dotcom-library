import './index.scss';
import { text, withKnobs } from '@storybook/addon-knobs';
import ContentGroup from '../ContentGroup';
import { CTA } from '../../../../components/CTA';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Patterns (Sub-Patterns)|ContentGroup', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => {
    const copy = text(
      'Component title(required):',
      'Lorem ipsum dolor sit amet.'
    );
    const cta = {
      title: 'Lorem ipsum dolor sit amet',
      href: 'https://ibm.com',
    };

    return (
      <div className="bx--grid ">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
            <ContentGroup
              heading={copy}
              cta={<CTA style="card" type="local" {...cta} />}
            />
            {/* <ContentGroup heading={copy} {...cta} /> */}
          </div>
        </div>
      </div>
    );
  });
