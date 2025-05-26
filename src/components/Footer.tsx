import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerBottom}>
      © {new Date().getFullYear()} Charlottesville TOPSoccer
    </div>
    <div className={styles.footerBottom}>
      Contact us:{" "}
      <a
        href="mailto:TOPSOCCER@charlottesvillealliancesc.org"
        className={styles.contactLink}
      >
        TOPSOCCER@charlottesvillealliancesc.org
      </a>
    </div>
  </footer>
);

export default Footer;
