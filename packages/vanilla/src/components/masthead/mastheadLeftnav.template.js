/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings } from 'carbon-components';

const { prefix } = settings;

/**
 * renders masthead profile menu
 *
 * @param {Array} navigation Navigation links Array
 * @returns {string} masthead profile menu html output
 */
function mastheadLeftnavTemplate(navigation) {
  return `
    <div class="${prefix}--side-nav__overlay"></div>
    <nav id="${prefix}--side-nav" class="${prefix}--side-nav__navigation ${prefix}--side-nav ${prefix}--side-nav--ux ${prefix}--side-nav--hidden" aria-label="Side navigation">
      <nav data-autoid="dds--masthead__l0-sidenav">
        <ul class="${prefix}--side-nav__items">
          <div class="${prefix}--side-nav__header-navigation">
            ${_renderNav(navigation)}
          </div>
        </ul>
      </nav>
    </nav>
  `;
}

/**
 * Renders the array of nav link items
 *
 * @param {Array} links Navigation links Array
 * @returns {string} HTML nav item
 * @private
 */
function _renderNav(links) {
  let navLinks = '';
  if (links && links.length > 0) {
    links.forEach(link => {
      if (link.hasMenu) {
        navLinks = navLinks + _renderSubnavItem(link);
      } else {
        navLinks = navLinks + _renderNavItem(link);
      }
    });
  }

  return navLinks;
}

/**
 * Renders a subnav nav item
 *
 * @param {Array} sections Navigation links Array
 * @returns {string} HTML nav item
 * @private
 */
function _renderSubnavItem(sections) {
  let subNavLinks = '';
  sections.menuSections.forEach(section => {
    section.menuItems.forEach(item => {
      subNavLinks = subNavLinks + _renderNavItem(item);
    });
  });

  return `
    <li class="${prefix}--side-nav__item">
      <button aria-haspopup="true" aria-expanded="false" class="${prefix}--side-nav__submenu" type="button">
        <span class="${prefix}--side-nav__submenu-title">${sections.title}</span>
        <div class="${prefix}--side-nav__icon ${prefix}--side-nav__icon--small ${prefix}--side-nav__submenu-chevron">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true" style="will-change: transform;">
            <path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path>
          </svg>
        </div>
      </button>
      <ul class="${prefix}--side-nav__menu" role="menu">
        <li class="${prefix}--side-nav__menu-item ${prefix}--masthead__side-nav--submemu-back" role="none">
          <a href="javascript:void(0);" data-autoid="dds--masthead__l0-sidenav--subnav-back-1" class="${prefix}--side-nav__link" role="menuitem">
            <span class="${prefix}--side-nav__link-text">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="will-change: transform;">
                <path d="M6.7 12.3L2.9 8.5H15v-1H2.9l3.8-3.8L6 3 1 8l5 5z"></path>
              </svg>
              Back
            </span>
          </a>
        </li>
        <li class="${prefix}--masthead__side-nav--submemu-title">${sections.title}</li>
        ${subNavLinks}
      </ul>
    </li>
  `;
}

/**
 * Renders a single nav item
 *
 * @param {Array} link Navigation links Array
 * @returns {string} HTML nav item
 * @private
 */
function _renderNavItem(link) {
  return `
    <li class="${prefix}--side-nav__item"><a href="${link.url}" data-autoid="dds--masthead__l0-sidenav--nav-2" class="${prefix}--side-nav__link"><span class="${prefix}--side-nav__link-text">${link.title}</span></a></li>
  `;
}

export default mastheadLeftnavTemplate;
