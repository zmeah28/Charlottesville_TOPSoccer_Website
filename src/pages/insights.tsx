import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/insights.module.css';

import Player1 from '@/assets/images/Player1.png';
import Player2 from '@/assets/images/Player2.png';
import Player3 from '@/assets/images/Player3.png';
import Volunteer1 from '@/assets/images/Volunteer1.png';
import Volunteer2 from '@/assets/images/Volunteer2.png';

const AboutPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const anim = entry.target.getAttribute('data-animation')!;
            if ((styles as any)[anim]) {
              entry.target.classList.add((styles as any)[anim]);
              entry.target.classList.remove(styles.hidden);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.hidden}`)
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
      <div className={styles.aboutFrame}>
        {/* Players */}
        <h1 className={`${styles.mainHeading} ${styles.hidden}`} data-animation="animateSlideInLeft">
          Players
        </h1>
        <div className={styles.playersSection}>
          <div className={styles.playerGrid}>
            {[Player1, Player2, Player3].map((img, i) => (
              <div key={i} className={`${styles} ${styles.hidden}`} data-animation="animateFadeIn">
                <Image
                  src={img}
                  alt={`Player ${i+1}`}
                  width={100}
                  height={100}
                  className={`${styles.Image} ${styles.rounded}`}
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Registration */}
        <section className={`${styles.contentSection} ${styles.hidden}`} data-animation="animateFadeIn">
          <h2 className={styles.subHeading}>Registration</h2>
          <p>
            Charlottesville TOPSoccer is a completely free program. All children, regardless of financial circumstances, can participate.
          </p>
          <p>
            Registration is handled through our affiliate club, Charlottesville Alliance Sports Club. It may be necessary to provide a doctor’s permission slip. To register your player,{' '}
            <a
              href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0zNDgtMTc0Njk4MzA0MnxOQU9pckJMODg3M1hLS011c2QxOHg3RndoUW9NR0hpdGpEOUFyUHd3WEtNPQ%3D%3D&program_id=56121"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>.
          </p>
        </section>

        {/* Volunteers */}
        <h1 className={`${styles.mainHeading} ${styles.hidden}`} data-animation="animateSlideInLeft">
          Volunteers
        </h1>
        <section className={`${styles.contentSection} ${styles.hidden}`} data-animation="animateSlideInLeft">
          <h2 className={styles.subHeading}>Participation</h2>
          <p>
            The relationship between Buddies and players, and their roles within Charlottesville TOPSoccer, is what makes this program so special and successful.
          </p>
          <p>
            Some Buddies have experience spending time with people with disabilities, and some do not — that is completely okay! We will make sure you feel prepared and confident in your role by taking the steps to train you.
          </p>
          <p>
            If our mission resonates with you, and you want to get involved in Charlottesville TOPSoccer as a Buddy, please complete this{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMwH4WiIKK6cu2rzQ00muLtdghWiqDpnFcE_SG96dFavdZPw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              form
            </a>.
          </p>
        </section>

        <section className={`${styles.contentSection} ${styles.hidden}`} data-animation="animateSlideInLeft">
          <h2 className={styles.subHeading}>Location and Time</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoListItem}>
              Sessions are held on Saturdays from 10 AM – 11 AM at Alliance Sports Park (1313 Polo Grounds Road, Charlottesville, VA 22911)
            </li>
            <li className={styles.infoListItem}>
              Spring 2025 Program Dates: 04/05, 04/12, 04/26, 05/03, 05/10
            </li>
          </ul>
        </section>

        {/* Volunteer Photos */}
        <section className={styles.volunteerSection}>
          <div className={styles.volunteerGrid}>
            {[Volunteer1, Volunteer2].map((img, i) => (
              <div key={i} className={`${styles} ${styles.hidden}`} data-animation="animateFadeIn">
                <Image
                  src={img}
                  alt={`Volunteer ${i+1}`}
                  width={100}
                  height={100}
                  className={`${styles.Image} ${styles.rounded}`}
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default AboutPage;
