import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import { SECTION_TITLE_FONT_FAMILY } from '../../styles';

const STYLE = css({
  '&.side-bar-section': {
    marginBottom: 50,
    marginLeft: 50,
    paddingTop: 20,
    pageBreakInside: 'avoid'
  },

  '.side-bar-section__title': {
    borderBottom: 'solid 2px White',
    fontFamily: SECTION_TITLE_FONT_FAMILY,
    fontSize: 20,
    letterSpacing: 5,
    paddingBottom: 10,
    paddingRight: 100,
    textTransform: 'uppercase'
  },

  '.side-bar-section__content': {
    // marginTop: 20
  }
});

const Section = ({ children, title }) => {
  return (
    <div className={classNames('side-bar-section', STYLE)}>
      <div className="side-bar-section__title">{title}</div>
      <div className="side-bar-section__content">{children}</div>
    </div>
  );
};

export default Section;
