import React from 'react';

import heart from '../images/heart-outline.png';

export default () => (
  <footer className="pt-2">
    <div className="footer">
        Made with
        <span className="mx-1">
          <img src={heart} alt="foot-icon" height="22" />
        </span>
        in Lagos
    </div>
  </footer>
);
