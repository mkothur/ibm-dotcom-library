//import './index.scss';
import { object, select, withKnobs } from '@storybook/addon-knobs';
import CTA from '../Cta';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Components | CTA', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('CTA', () => {
    const type = ['local', 'jump', 'external'];
    const data = {
      text: {
        copy: 'Nunc Pulvinar Nisi',
        href: 'https://www.ibm.com',
        type: type[0],
      },
      card: {
        href: 'https://www.ibm.com',
        title: 'Nunc Pulvinar Nisi',
        type: type[0],
      },
      feature: {
        heading: 'Nunc Pulvinar Nisi',
        card: {
          href: 'https://www.ibm.com',
          title: 'Nunc Pulvinar Nisi',
          type: type[0],
          image: {
            defaultImage: 'https://picsum.photos/id/2/672/672',
            alt: 'featured link image',
          },
        },
      },
      button: [
        {
          link: '',
          copy: 'Nunc Pulvinar Nisi',
          href: 'https://www.ibm.com',
          type: type[1],
        },
        {
          link: '',
          copy: 'Nunc Pulvinar Nisi',
          href: 'https://www.example.com',
          type: type[1],
        },
      ],
    };

    const styles = Object.keys(data);
    const style = select('style', styles, styles[0]);

    return (
      <CTA
        style={style}
        cta={object(`Data (${style})`, data[style])}
        // buttons={buttons}
      />
    );
  });
