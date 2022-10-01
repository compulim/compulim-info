import { css } from '@emotion/css';
import React from 'react';

import * as Styles from '../../styles';

const BOX = css({
  marginBottom: 50,
  marginLeft: 50,
  paddingTop: 20,
  pageBreakInside: 'avoid',

  '& > .title': {
    borderBottom: 'solid 2px White',
    fontFamily: Styles.SECTION_TITLE_FONT_FAMILY,
    fontSize: 20,
    letterSpacing: 5,
    paddingBottom: 10,
    paddingRight: 100,
    textTransform: 'uppercase'
  },

  '& > .content': {
    // marginTop: 20
  }
});

const Section = ({ children, title }) => {
  return (
    <div className={BOX}>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Section;
