/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ArrowDown20, ArrowRight20, Launch20 } from '@carbon/icons-react';
import { ButtonGroup } from '../../patterns/sub-patterns/ButtonGroup';
import { CardLink } from '../../patterns/sub-patterns/CardLink';
import { FeaturedLink } from '../../patterns/blocks/FeaturedLink';
import { LinkWithIcon } from '../LinkWithIcon';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * CTA component
 *
 * @param {object} props props object
 * @param {string} props.style style ( text | card | button | feature ).
 * @param {object} props.cta cta object which includes text, card, feature and buttons properties.
 * @returns {*} CTA Component
 */
const CTA = ({ style, cta }) =>
  style === 'card' ? (
    <CardLink {...cta} icon={iconSelector(cta.type)} />
  ) : style === 'button' ? (
    <ButtonGroup buttons={renderButton(cta)} />
  ) : style === 'feature' ? (
    <FeaturedLink {...cta} />
  ) : (
    //icon={iconSelector(cta.type)}
    <LinkWithIcon href={cta.href}>
      {cta.copy}
      {iconSelector(cta.type)}
    </LinkWithIcon>
  );

/**
 * sets icon based on selected type
 *
 * @param {string} type cta type ( external | jump | local)
 * @returns {*} cta type component
 */
const iconSelector = type =>
  type === 'external' ? (
    <Launch20 />
  ) : type === 'jump' ? (
    <ArrowDown20 />
  ) : (
    <ArrowRight20 />
  );

/**
 * sets button
 *
 * @param {object} cta object with buttons array
 * @returns {*} object
 */
const renderButton = cta =>
  cta.map(obj => {
    obj.renderIcon = iconSelector(cta.type);
    console.log('renderButton', obj);
    return obj;
  });

CTA.propTypes = {
  cta: PropTypes.object,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default CTA;
