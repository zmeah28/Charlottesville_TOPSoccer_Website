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
  { label: 'Members', href: '/members' },
  { label: 'Insights', href: '/insights' },
  { label: 'Apply', href: '/apply' },
  { label: 'Members Area', href: '/members-area' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link href="/" onClick={closeMenu} className={styles.logoContainer}>
          <Image
            src={LogoImage}
            alt="Logo"
            width={65}
            height={65}
            className={styles.logo}
          />
        </Link>
        <span className={styles.siteTitle}>Charlottesville TOPSoccer</span>
      </div>

      <button
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      <div className={styles.centerSection}>
        <div className={`${styles.navItems} ${menuOpen ? styles.show : ''}`}>
          {navItems.map(item => (
            <div
              key={item.href}
              className={styles.navItem}
              onClick={closeMenu}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
              <Image
                src={SoccerBall}
                alt=""
                width={20}
                height={20}
                className={styles.soccerBall}
              />
            </div>
          ))}
        </div>

        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/company/charlottesville-topsoccer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.instagram.com/topsoccer_cville/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagramLogo}
              alt="Instagram"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
