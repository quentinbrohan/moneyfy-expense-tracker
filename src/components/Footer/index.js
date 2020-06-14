import React from 'react';
import './footer.scss';
import githubLogo from 'src/assets/images/GitHub-Mark-64px.png';

const Footer = () => (
  <footer>
    <a href="https://github.com/quentinbrohan" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="Logo GitHub" title="Quentin Brohan (GitHub)" />
    </a>
  </footer>
);

export default Footer;
