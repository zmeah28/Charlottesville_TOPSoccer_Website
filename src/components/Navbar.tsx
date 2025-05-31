import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';

import LogoImage from '@/assets/images/Logo_Image.png';
import SoccerBall from '@/assets/images/soccer_ball.png';
import linkedinLogo from '@/assets/images/linkedin_logo2.png';
import instagramLogo from '@/assets/images/instagram_logo2.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/members' },
  { label: 'Join Us', href: '/insights' },
  { label: 'Community', href: '/apply' },
  { label: 'Inclusion Policy', href: '/members-area' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu = () => setMenuOpen(false);

  const SocialIcons = () => (
    <>
      <a href="https://www.linkedin.com/company/charlottesville-topsoccer/" target="_blank" rel="noopener noreferrer">
        <Image src={linkedinLogo} alt="LinkedIn" width={24} height={24} className={styles.socialIcon} />
      </a>
      <a href="https://www.instagram.com/topsoccer_cville/" target="_blank" rel="noopener noreferrer">
        <Image src={instagramLogo} alt="Instagram" width={24} height={24} className={styles.socialIcon} />
      </a>
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <Link href="/" onClick={closeMenu} className={styles.logoContainer}>
            <Image src={LogoImage} alt="Logo" width={65} height={65} className={styles.logo} />
          </Link>
          <span className={styles.siteTitle}>Charlottesville TOPSoccer</span>
        </div>

        {/* mobile social icons */}
        <div className={styles.socialIconsMobile}>
          <SocialIcons />
        </div>

        <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>

        <div className={styles.centerSection}>
          {/* desktop nav links */}
          <div className={styles.navItemsDesktop}>
            {navItems.map(item => (
              <div key={item.href} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
                <Image src={SoccerBall} alt="" width={20} height={20} className={styles.soccerBall} />
              </div>
            ))}
          </div>

          {/* desktop social icons */}
          <div className={styles.socialIconsDesktop}>
            <SocialIcons />
          </div>
        </div>
      </nav>
      <div className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ''}`} onClick={closeMenu} />

      {/* side drawer */}
      <aside className={`${styles.sideDrawer} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
        <nav className={styles.navItemsMobile}>
          {navItems.map(item => (
            <div key={item.href} className={styles.navItemMobile} onClick={closeMenu}>
              <Link href={item.href} className={styles.navLinkMobile}>
                {item.label}
              </Link>
              <Image src={SoccerBall} alt="" width={20} height={20} className={styles.soccerBallMobile} />
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
