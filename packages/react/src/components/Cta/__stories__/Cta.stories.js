import { select, withKnobs } from '@storybook/addon-knobs';
import CTA from '../Cta';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

storiesOf('Components|CTA', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => {
    let cta, type;
    const copy = ['Lorem ipsum dolor sit amet', 'Consectetur adipisicing elit'];
    const types = ['local', 'jump', 'external'];
    const styles = ['text', 'card', 'feature', 'button'];
    const style = select('style', styles, styles[0]);
    const urlBy = {
      jump: '#example',
      local: 'https://ibm.com',
      external: 'https://example.com',
    };

    switch (style) {
      case 'text':
        type = select('type', types, types[0]);
        cta = {
          type: type,
          href: urlBy[type],
          copy: copy[0],
        };
        break;
      case 'card':
        type = select('type', types, types[0]);
        cta = {
          type: type,
          href: urlBy[type],
          title: copy[0],
        };
        break;
      case 'feature':
        type = select('type', types, types[0]);
        cta = {
          heading: copy[0],
          card: {
            type: type,
            href: urlBy[type],
            title: copy[1],
            image: {
              defaultImage: 'https://picsum.photos/id/672/672',
              alt: '...',
            },
          },
        };
        break;
      case 'button':
        type = [
          select('button 1 type', types, types[0]),
          select('button 2 type', types, types[0]),
        ];
        cta = {
          buttons: [
            {
              type: type[0],
              href: urlBy[type[0]],
              copy: copy[0],
            },
            {
              type: type[1],
              href: urlBy[type[1]],
              copy: copy[1],
            },
          ],
        };
        break;
      default:
    }
    return (
      <div className="bx--grid ">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
            <CTA style={style} {...cta} type={type} />
          </div>
        </div>
        {type === 'jump' || type[0] === 'jump' || type[1] === 'jump' ? (
          <div
            className="bx--row"
            style={{ marginTop: '80px', marginBottom: '80px' }}>
            <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
              {(() => {
                let content = [];
                for (let i = 0; i < 10; i++) {
                  if (i === 2) {
                    content.push(
                      <h4
                        id="example"
                        name="example"
                        style={{ marginBottom: '32px' }}>
                        Example
                      </h4>
                    );
                  }
                  content.push(
                    <p style={{ marginBottom: '32px' }}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                      }
                    </p>
                  );
                }
                return content;
              })()}
            </div>
          </div>
        ) : null}
      </div>
    );
  });
